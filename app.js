//imports
const EventEmitter = require("events");
const Logger = require("./logger");
const http = require("http");
const { Socket } = require("dgram");
const fs = require("fs");
const path = require("path");

// Create an instance of the `http.Server` class
const server = http.createServer();

// Register a listener for the `connection` event on the `server` object
server.on("connection", () => {
  console.log("new connection");
});

// Start the server and make it listen on port 3000
server.listen(3000);

// Output a message to the console indicating that the server is running
console.log("Listening on port 3000...");

// Create an instance of the `Logger` class
const logger = new Logger();

// Register a listener for the "messageLogged" event
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

// Call the `log()` method of the `logger` object and pass a message as an argument
logger.log("message");
