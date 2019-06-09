const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const increamentTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime/1000} seconds`)
}
console.log(`setting a ${waitTime/1000} seconds delay`);

const timeFinished = () => {
    clearInterval(interval);
    console.log("done");
}
const interval = setInterval(increamentTime, waitInterval);
setTimeout(timeFinished, waitTime);