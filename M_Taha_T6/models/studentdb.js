const mongoose = require("mongoose");

studen_db_url = "mongodb://127.0.0.1:27017/SMS";

// async function connectMongoDB() {
mongoose
  .connect(studen_db_url)
  .then(() => {
    console.log("Connection Established..");
  })
  .catch((err) => {
    console.log("Unable to connect due to : " + err);
  });
// }
// connectMongoDB();
// module.exports = {
//   connectMongoDB,
// };
