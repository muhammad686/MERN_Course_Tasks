const Student = require("../models/studentmodal");

// insert data to database
async function handleCreateNewStudent(req, res) {
  const body = req.body;
  try {
    const student = await Student.create({
      name: body.fullname,
      program: body.Degree,
      semester: body.Semester,
    });
    student.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).render("Home.ejs", { msg: "Internal Server Error" });
  }
}
// reterive and show all data from database
async function handleGetAllStudents(req, res) {
  try {
    const students = await Student.find();
    // console.log(students);
    const formattedstudents = students.map((student) => {
      return {
        id: student._id,
        name: student.name,
        program: student.program,
        semester: student.semester,
      };
    });
    // console.log(formattedstudents);
    res.render("result.ejs", { data: formattedstudents });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).render("Home.ejs", { msg_ret: "Internal Server Error" });
  }
}
async function handleRenderForm(req, res) {
  res.render("Home.ejs");
}

async function handleRenderEditForm(req, res) {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    res.render("update.ejs", { student });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
async function handleUpdateStudentByID(req, res) {
  try {
    const studentId = req.params.id;
    const { name, semester, program } = req.body;
    console.log(name, semester, program);
    await Student.findByIdAndUpdate(studentId, { name, semester, program });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function handleDeleteStudentByID(req, res) {
  try {
    const studentId = req.params.id;
    // console.log(studentId);
    await Student.findByIdAndDelete(studentId);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  handleGetAllStudents,
  handleUpdateStudentByID,
  handleDeleteStudentByID,
  handleCreateNewStudent,
  handleRenderForm,
  handleRenderEditForm,
};
