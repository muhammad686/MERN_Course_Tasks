const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://127.0.0.1:27017/College_Management_System")
  .then(() => {
    console.log("Connection Established.....");
  })
  .catch((err) => {
    console.log(err);
  });

const StudentSchema = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Hostel_No: {
    required: true,
    type: Number,
  },
  department: {
    required: true,
    type: String,
  },
  Degree: {
    required: true,
    type: String,
  },
  semester: {
    required: true,
    type: Number,
  },
});
const HostelSchema = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Hostel_No: {
    required: true,
    type: Number,
  },
  room_no: {
    required: true,
    type: Number,
  },
  department: {
    required: true,
    type: String,
  },
  Degree: {
    required: true,
    type: String,
  },
  semester: {
    required: true,
    type: Number,
  },
});
const DepartmentSchema = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  department: {
    required: true,
    type: String,
  },
  Degree: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});
const CoursesSchema = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
  },
  Subject1: {
    type: String,
    required: true,
    minlength: 3,
  },
  Subject2: {
    type: String,
    required: true,
    minlength: 3,
  },
  Subject3: {
    type: String,
    required: true,
    minlength: 3,
  },
});

const student = new mongoose.model("student", StudentSchema);
const Hostel = new mongoose.model("Hostel", HostelSchema);
const Department = new mongoose.model("Department", DepartmentSchema);
const course = new mongoose.model("course", CoursesSchema);

const createRecords = async () => {
  try {
    {
      const StudentData = [
        {
          RegNo: "1234242",
          Name: "taha",
          Gender: "male",
          Hostel_No: 8,
          department: "CS",
          Degree: "BS",
          semester: 9,
        },
        {
          RegNo: "1234242",
          Name: "taha",
          Gender: "male",
          Hostel_No: 8,
          department: "CS",
          Degree: "BS",
          semester: 9,
        },
      ];
      await student.insertMany(StudentData);
      const HostelData = [
        {
          RegNo: "1234242",
          Name: "taha",
          Hostel_No: 8,
          room_no: 56,
          department: "CS",
          Degree: "BS",
          semester: 9,
        },
        {
          RegNo: "1234242",
          Name: "taha",
          Hostel_No: 8,
          room_no: 56,
          department: "CS",
          Degree: "BS",
          semester: 9,
        },
      ];
      await Hostel.insertMany(HostelData);
      const DepartmentData = [
        {
          RegNo: "1234242",
          Name: "taha",
          department: "CS",
          Degree: "BS",
          semester: 9,
        },
        {
          RegNo: "1234242",
          Name: "taha",
          department: "CS",
          Degree: "BS",
          semester: 9,
        },
      ];
      await Department.insertMany(DepartmentData);
      const CoursesData = [
        {
          RegNo: "0407182",
          Subject1: "PHY",
          Subject2: "MATH",
          Subject3: "CHE",
        },
        {
          RegNo: "0407182",
          Subject1: "PHY",
          Subject2: "MATH",
          Subject3: "CHE",
        },
      ];
      await course.insertMany(CoursesData);
    }
  } catch (error) {
    console.log(error);
  }
};

const DisplayRecords = async () => {
  try {
    const studentRecords = await student.find();
    console.log("Students Collection Records:");
    console.log(studentRecords);

    const HostelRecords = await Hostel.find();
    console.log("Hostels Collection Records:");
    console.log(HostelRecords);

    const departmentRecords = await Department.find();
    console.log("Department Collection Records:");
    console.log(departmentRecords);

    const coursesRecords = await course.find();
    console.log("Courses Collection Records:");
    console.log(coursesRecords);
  } catch (err) {
    console.log(err);
  }
};

createRecords();
DisplayRecords();
