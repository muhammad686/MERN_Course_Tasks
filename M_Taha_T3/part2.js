import express from "express";
import EventEmitter from "events";
const app = express();
const port = 8080;

const responseEmitter = new EventEmitter();

responseEmitter.on("responseSent", (data) => {
  console.log("response event data:", data);
});
app.get("/", (req, res) => {
  responseEmitter.emit("responseSent", {
    message: "response event on Name is emitted.",
  });
  res.send("Muhammad Taha");
});

// name as a JSON object
app.get("/json", (req, res) => {
  res.json({ name: "Muhammad Taha" });
  responseEmitter.emit("responseSent", {
    message: "response event on JSON is emitted.",
  });
});

app.get("/html", (req, res) => {
  res.send('<h1 style="color: red;">Muhammad Taha</h1>');
  responseEmitter.emit("responseSent", {
    message: "response event on HTML is emitted.",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
