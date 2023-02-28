//we want to use logger module here
//to load the module we use the require function
const logger = require("./logger");
const path = require("path"); //built in PATH module stored in const path
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events"); // CLASS OF EVENT EMITTER

//when calling a single function this is best practice
logger("This is calling a function from logger.js");

//when calling objects, this is best practice
logger.logging("This is calling an object from logger.js");

let pathObject = path.parse(__filename); //utilises the parse method of the path module, using the __filename argument.
//result stored in pathObject variable

console.log(pathObject); //calling pathObject as a console.log

//
//OS MODULE VARIABLES
let totalMemory = os.totalmem();
let freeMemory = os.freemem();

//OS MODULE CALLS
console.log(`the total memory available on this mac is ${totalMemory} bits`);
console.log(`the free memory available on this mac is ${freeMemory} bits`);

//
//FS MODULE VARIABLES - DO NOT USE SYNCHRONOUS, ONLY ASYNCHRONOUS. (NOT SYNC)
let fileReadSync = fs.readdirSync("./"); // this is sync
let fileReadAsync = fs.readdir("../", function (err, files) {
  if (err) console.log("ERROR", err);
  else console.log("Result", files);
}); // this is async

//FS MODULE CALLS
console.log(fileReadSync);
console.log(fileReadAsync);

//insansiating emitter object
const emitter = new EventEmitter(); // OBECT OF EMITTER

//registering a listener
emitter.on("messageLogged", function () {
  //this does not call an argument, and uses standard function syntax
  console.log("Listener Called.");
});

//registering another listener
emitter.on("messageWithArgs", (arg) => {
  //call an argument with 'arg' and uses an arrow function

  console.log("The arguments are: ", arg);
});

//raising an event
emitter.emit("messageLogged"); // signalling an event has happened

//raising another event with event arguments
emitter.emit("messageWithArgs", { id: 1, url: "http://www.google.com" }); // signalling an event has happened..
