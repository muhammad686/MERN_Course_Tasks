const os = require("os");
const path = require("path");

// pert 1
const uptime = os.uptime();
console.log(`System has been up for ${uptime} sec`);

const filePath =
  "C:/Users/DELL/Desktop/9th semester/WAF/M_Taha_WAF_Lab_Oct_05/rough.js";
const fileInfo = path.parse(filePath);
console.log("File Information:");
console.log(`- File Name: ${fileInfo.base}`);
console.log(`- Directory: ${fileInfo.dir}`);
console.log(`- Extension: ${fileInfo.ext}`);
