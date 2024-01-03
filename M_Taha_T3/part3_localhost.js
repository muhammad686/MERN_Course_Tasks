import http from "http";
import url from "url";
import fs from "fs";

const port = 8080;
// const ip = "10.141.11.29";
// const my_ip = "10.141.35.1";

const app = http.createServer((req, res) => {
  const parsed_url = url.parse(req.url, true);
  console.log(parsed_url);
  const response = parsed_url.query.message || "";

  if (response) {
    fs.appendFileSync("Chat.txt", `Node B Says: ${response}\n`);
    console.log(`Node B Says: ${response}`);
    res.end("Message Received");
  } else {
    res.end("Hello Node B!.");
  }
});

app.listen(port, "localhost", () => {
  console.log(`Node B server is running on http://localhost:${port}?message=`);
});
