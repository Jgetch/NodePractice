// Importing the 'events' module
const EventEmitter = require("events");

// Initializing a 'url' variable as a str
let url = "http://www.google.com";

// Creating a new class called 'Logger' that inherits from the 'EventEmitter' class
class Logger extends EventEmitter {
  // Defining a 'log' method that logs the 'message' argument and emits a 'messageLogged' event
  log(message) {
    // Logging the 'message' argument
    console.log(message);

    // Emitting a 'messageLogged' event with an object containing 'id' and 'url' properties
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

// Exporting the 'Logger' class for use in other files
module.exports = Logger;
