var name = "John";
function sayHello() {
    console.log("Hello " + name);
}

var johnGreeter = {};
johnGreeter.name = "John";
johnGreeter.sayHello = function() {
    console.log("Hello " + johnGreeter.name);
}

