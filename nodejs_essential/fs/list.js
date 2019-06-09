const fs = require("fs");

const files = fs.readdir("../globals", (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
});

