const EventEmitter = require("events");
const emitter = new EventEmitter();
// emit in english means making a noize , produce  - signalling a event had happen

// Register a Listener
emitter.on("messageLogged", function (arg) {
  /// e , eventArg
  console.log("Lister Called", arg);
});

// Raise a event
emitter.emit("messageLogged", { id: 1, url: "http://" });

const Logger = require("./logger.cjs");
const logger = new Logger();
console.log(logger);
// logger.log("message");
