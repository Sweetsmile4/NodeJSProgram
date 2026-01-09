// Using Events


const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('start', () => {
    console.log("Event started!");
});

emitter.emit('start');