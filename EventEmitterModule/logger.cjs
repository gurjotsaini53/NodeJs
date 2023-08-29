const EventEmitter = require("events");
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // sends an HTTP request
    console.log(message);

    // raise an event

    this.event("messageLogger", { id: 1, url: "http://" });
  }
}

exports.module = Logger;
