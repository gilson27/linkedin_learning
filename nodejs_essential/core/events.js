const events = require('events');
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)
});

emitter.emit("customEvent", "Test1", "U1");
emitter.emit("customEvent", "Test2", "U2");