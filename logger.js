const EventEmitter = require("events");

let url = "http://www.google.com";

class Logger extends EventEmitter {
  log(message) {
    //send http request
    console.log(message);
    //raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
