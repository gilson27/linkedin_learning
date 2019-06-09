const fs = require('fs');
const colorData = require("./ex_color_data.json")

colorData.colorList.forEach(c => {
    fs.appendFile("./colors.md", `${c.name}: ${c.hex}\n`, err => {
        if (err) {
            throw err;
        }
        // console.log(`Error appending: ${err.message}`);
    });
});