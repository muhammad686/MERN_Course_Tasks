const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://127.0.0.1:27017/Muhammad_Taha")
  .then(() => {
    console.log("Connection Established.....");
  })
  .catch((err) => {
    console.log(err);
  });

const personalsSchema = new mongoose.Schema({
  RegistrationNumber: {
    type: Number,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  CityName: String,
});

const academicsSchema = new mongoose.Schema({
  RegistrationNumber: {
    type: Number,
    required: true,
  },
  DegreeEnrolled: String,
  EnrollmentYear: Number,
  FavoriteCourse: String,
});

const personals_collection = new mongoose.model(
  "personals_collection",
  personalsSchema
);
const Academics = new mongoose.model("Academics", academicsSchema);

const createDocuments = async () => {
  try {
    // Create 5 documents for personals_collection
    const personalsData = [
      { RegistrationNumber: 1, Name: "Student 1", CityName: "Rawalpindi" },
      { RegistrationNumber: 2, Name: "Student 2", CityName: "Islamabad" },
      { RegistrationNumber: 3, Name: "Student 3", CityName: "Lahore" },
      { RegistrationNumber: 4, Name: "Student 4", CityName: "Rawalpindi" },
      { RegistrationNumber: 5, Name: "Student 5", CityName: "Karachi" },
    ];
    await personals_collection.insertMany(personalsData);

    // Create 5 documents for academics_collection
    const academicsData = [
      {
        RegNo: "04071913018",
        DegreeEnrolled: "BSCS",
        EnrollmentYear: 2019,
        FavoriteCourse: "WAF",
      },
      {
        RegNo: "04071913019",
        DegreeEnrolled: "BSIT",
        EnrollmentYear: 2019,
        FavoriteCourse: "WAD",
      },
      {
        RegNo: "04071913020",
        DegreeEnrolled: "BSCS",
        EnrollmentYear: 2019,
        FavoriteCourse: "NLP",
      },
      {
        RegNo: "04071913021",
        DegreeEnrolled: "BSCS",
        EnrollmentYear: 2019,
        FavoriteCourse: "ML",
      },
      {
        RegNo: "04071913022",
        DegreeEnrolled: "BSCS",
        EnrollmentYear: 2019,
        FavoriteCourse: "DSA",
      },
    ];
    await Academics.insertMany(academicsData);

    console.log("Documents created successfully.");
  } catch (err) {
    console.log(err);
  }
};

const readAndDisplayRecords = async () => {
  try {
    // Read and display all records of personals_collection
    const personalsRecords = await personals_collection.find();
    console.log("Personals Collection Records:");
    console.log(personalsRecords);

    // Read and display all records of academics_collection
    const academicsRecords = await Academics.find();
    console.log("Academics Collection Records:");
    console.log(academicsRecords);
  } catch (err) {
    console.log(err);
  }
};

const readStudentsFromRawalpindi = async () => {
  try {
    // Read and display the names of students who are from Rawalpindi
    const rawalpindiStudents = await personals_collection.find(
      { CityName: "Rawalpindi" },
      { Name: 1, _id: 0 }
    );
    console.log("Students from Rawalpindi:");
    console.log(rawalpindiStudents);
  } catch (err) {
    console.log(err);
  }
};

const readStudentsEnrolledIn2019 = async () => {
  try {
    // Read and display the names of students who got enrolled in 2019
    const studentsEnrolledIn2019 = await Academics.find(
      { EnrollmentYear: 2019 },
      { DegreeEnrolled: 1, _id: 0 }
    );
    console.log("Students enrolled in 2019:");
    console.log(studentsEnrolledIn2019);
  } catch (err) {
    console.log(err);
  }
};

const updateCityNames = async () => {
  try {
    // Update the city name as "Rawalpindi/Islamabad" wherever it's "Rawalpindi" or "Islamabad"
    await Personals.updateMany(
      { CityName: { $in: ["Rawalpindi", "Islamabad"] } },
      { $set: { CityName: "Rawalpindi/Islamabad" } }
    );
    console.log("City names updated successfully.");
  } catch (err) {
    console.log(err);
  }
};

const deleteStudentsBefore2019 = async () => {
  try {
    // Delete the documents of those students from both collections who enrolled before 2019
    await Personals.deleteMany();
    await Academics.deleteMany({ EnrollmentYear: { $lt: 2019 } });
    console.log("Students enrolled before 2019 deleted.");
  } catch (err) {
    console.log(err);
  }
};

// Uncomment the functions you want to execute
createDocuments();
// readAndDisplayRecords();
// readStudentsFromRawalpindi();
// readStudentsEnrolledIn2019();
// updateCityNames();
// deleteStudentsBefore2019();
