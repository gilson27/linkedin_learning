const collectAnswers = require("./questions");

const questions = [
    "What is your name?", 
    "Where are you living? ",
    "What are you doing with nodejs?"
];

collectAnswers(questions, answers => {
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
});