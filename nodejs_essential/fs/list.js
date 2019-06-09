const fs = require("fs");

const files = fs.readdirSync("../globals");

console.log(files);