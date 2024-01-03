import express from "express";
const app = express();
const port = 8080;

// sending only  Name
app.get("/", (req, res) => {
  res.send("Muhammad Taha");
});

// Sending in json format
app.get("/json", (req, res) => {
  res.json({ name: "Muhammad Taha" });
});

// sending in HTmL format
app.get("/html", (req, res) => {
  res.send('<h1 style="color: red;">Muhammad Taha</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
