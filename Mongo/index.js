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
    length: 12,
  },
  Name: {
    type: String,
    required: true,
    minlength: 5,
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
    length: 12,
  },
  Name: {
    type: String,
    required: true,
    minlength: 5,
  },
  Hoste_No: {
    required: true,
    type: Number,
  },
  room_no: {
    required: true,
    type: Number,
  },
  department: {
    required: true,
    type: Number,
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
    length: 12,
  },
  Name: {
    type: String,
    required: true,
    minlength: 5,
  },
  department: {
    required: true,
    type: Number,
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
    length: 12,
  },
  Subject1: {
    type: String,
    required: true,
    minlength: 5,
  },
  Subject2: {
    type: String,
    required: true,
    minlength: 5,
  },
  Subject3: {
    type: String,
    required: true,
    minlength: 5,
  },
});

const student = new mongoose.model("student", StudentSchema);
const Hostel = new mongoose.model("Hostel", HostelSchema);
const Department = new mongoose.model("Department", DepartmentSchema);
const courses = new mongoose.model("Student", CoursesSchema);

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
      await courses.insertMany(CoursesData);
    }
  } catch (error) {
    console.log(error);
  }
};

createRecords();
