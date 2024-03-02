import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("cv.pug");
});

app.post("/submit", (req, res) => {
  const { name, email, age, contact, qualification } = req.body;
  const userName = name;
  const userEmail = email;
  const userAge = age;
  const userContact = contact;
  const userQualification = qualification;
  res.render("cv.pug", {
    userName: name,
    userEmail: email,
    userAge: age,
    userContact: contact,
    userQualification: qualification,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
