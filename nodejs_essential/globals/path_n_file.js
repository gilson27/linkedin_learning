const path = require("path");

const util = require("util");

console.log(`the filename is ${path.basename(__filename)}`)

util.log(__dirname);
util.log(__filename);