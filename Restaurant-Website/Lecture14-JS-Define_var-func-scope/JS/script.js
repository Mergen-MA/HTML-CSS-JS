var message = "in global";
console.log("global: message =" + message);


var a = function () {
    var message = "inside a";
    console.log("a: message =" + message);

    function b () {
        console.log("b: message = " + message);
    }
    b();
}

a();

var x = function () {
    console.log("Hello World");
    return;
  };
  x();

  var x = function () {
    console.log("Hello World");
    return;
  };

  var x = function () {
    console.log("Hello World");
    return;
  };
  x = "hello, I am a new value!";

