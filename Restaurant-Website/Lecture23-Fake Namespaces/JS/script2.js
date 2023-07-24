var name = "Jake";
function sayHi() {
    console.log("Hi " + name);
} 

var jakeGreeter = {};
jakeGreeter.name = "Jake";
jakeGreeter.sayHi = function() {
    console.log("Hi " + jakeGreeter.name);
}

// (function(window) {
//     var jakeGreeter = {};
//     jakeGreeter.name = "Jake";
//     var greeting = "Hi ";
//     jakeGreeter.sayHi = function() {
//         console.log(greeting + jakeGreeter.name);
//     }
// }) (window);