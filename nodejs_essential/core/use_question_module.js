const collectAnswers = require("./questions");

const questions = [
    "What is your name?", 
    "Where are you living? ",
    "What are you doing with nodejs?"
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", (answer) => {
    console.log(`question answered: ${answer}`);
})

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
});