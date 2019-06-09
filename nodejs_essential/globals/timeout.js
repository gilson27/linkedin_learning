const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const increamentTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ${p} percent`)
}
console.log(`setting a ${waitTime/1000} seconds delay`);

const timeFinished = () => {
    clearInterval(interval);
    console.log("done");
}
const interval = setInterval(increamentTime, waitInterval);
setTimeout(timeFinished, waitTime);