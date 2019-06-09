const fs = require("fs");

const md = `
This is a tst file
`;

fs.writeFile("./test_write.txtx", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("file saved");
});