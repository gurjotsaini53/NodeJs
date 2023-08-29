// function Hello(name) {
//   console.log("Hello My Name is " + name);
// }

// Hello("Gurjot");

/*
console.log() // global objects

setInterval();
clearInterval();+
setTimeout();
clearTimeout();
*/
// console.log(Window); // not available in node

/*
console.log(global.setInterval()) // accesible
*/
var message = "Gurjot";
console.log(global.message); // variable is not accessible with global object

// Every file in nodejs is considered as a node module
// by default any variable , function in a node module is private

console.log(module);

var url = "http://google.com";

function log(message) {
  // sends and HTTP required
  console.log(message);
}

// module.exports.log = log;
module.exports = log;
// module.exports.endPoint = url;
