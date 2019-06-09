const fs = require("fs");

const text = fs.readFileSync("./list.js", "UTF-8");

console.log(text);