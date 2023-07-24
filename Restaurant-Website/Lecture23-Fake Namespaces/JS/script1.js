var name = "John";
function sayHello() {
    console.log("Hello " + name);
}

var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayHello = function() {
    console.log("Hello " + johnGreeter.name);
}


// (function(window) {
//     var johnGreeter = {};
// johnGreeter.name = "John";
// var greeting = "Hello ";
// johnGreeter.sayHello = function() {
//     console.log(greeting + johnGreeter.name);
// }
// }) (window);
