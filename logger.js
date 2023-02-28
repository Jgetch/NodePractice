// (function (exports, require, module, __filename, __dirname) {
//this is what node does in the background, it's called the module wrapper function.

//here we create a module

console.log(__filename); //logs filename of the module
console.log(__dirname); // logs dirname of the module

let url = "http://www.google.com";

function logging(message) {
  //sends an HTTP request
  console.log(message);
}

//variable and function both scoped to logger.js if not public

//to make the function and variable scoped elsewhere, use exports.
//if needing to export one function this is best practice
module.exports = logging;

//if we need to export objects this is best practice
module.exports.logging = logging;
// module.exports.endPoint = url; //can change name when exporting to endPoint

// });
