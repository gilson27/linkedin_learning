const fs = require('fs');


if (fs.existsSync("test_dir")) {
    console.log("Already there");
} else {
    fs.mkdir("test_dir", err =>{
        if (err) {
            throw err;
        }
        console.log("Created Directory ");
    });
}


