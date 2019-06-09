const fs = require("fs");

fs.readFile("./list.js", "UTF-8", (err, data) => {
    console.log(data.toString());
});

fs.readFile("./cycling.png", (err, data) => {
    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log(data);
});