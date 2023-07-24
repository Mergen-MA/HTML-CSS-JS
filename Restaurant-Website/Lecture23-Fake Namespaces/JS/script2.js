var name = "Jake";
function sayHi() {
    console.log("Hi " + name);
} 

var jakeGreeter = {};
jakeGreeter.name = "Jake";
jakeGreeter.sayHi = function() {
    console.log("Hi " + jakeGreeter.name);
}
