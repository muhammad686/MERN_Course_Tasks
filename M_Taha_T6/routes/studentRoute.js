const express = require("express");
const Student = require("../models/studentmodal");
const studentController = require("../controllers/studentController");
const router = express.Router();
//
//  use functions like router .get instead  app.get

router.get("/", studentController.handleGetAllStudents);
router.get("/add", studentController.handleRenderForm);
router.post("/add", studentController.handleCreateNewStudent);

router.get("/edit-student/:id", studentController.handleRenderEditForm);
router.post("/edit-student/:id", studentController.handleUpdateStudentByID);

router.post("/delete-student/:id", studentController.handleDeleteStudentByID);

// router
//   .route("/:id")
//   .patch(studentController.handleUpdateStudentByID)
//   .delete(studentController.handleDeleteStudentByID);
module.exports = router;
