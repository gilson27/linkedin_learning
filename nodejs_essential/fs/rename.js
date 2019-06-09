const fs = require('fs');

fs.renameSync("./color_data.json", "./ex-color_data.json");

fs.rename("./ex-color_data.json", "./color_data.json", err => {
    if (err) {
        throw err;
    }
});