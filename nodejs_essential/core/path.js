const path = require('path');
const dir_hello_world = path.join(__dirname, "..", "hello_world");
const {log} = require("util");
const {getHeapStatistics} = require("v8");
log(dir_hello_world);
log(getHeapStatistics());