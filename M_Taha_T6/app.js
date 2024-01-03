const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

require("./models/studentdb");
const studentRouter = require("./routes/studentRoute");

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");

app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/", studentRouter);

app.listen(PORT, () => {
  console.log(`server is running on -->  http://localhost:3000`);
});

require("./models/studentmodal");
