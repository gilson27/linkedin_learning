const cp =require("child_process");


const questions = cp.spawn("node", ["../core/use_question_module.js"]);
questions.stdout.on("data", (data) => {
    console.log(`${data}`);
});

questions.stdout.on("close", (data) => {
    console.log(`Process ended`);
});

questions.stdin.write("Alex\n");
questions.stdin.write("Fl\n");
questions.stdin.write("Change\n");