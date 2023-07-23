var array = new Array();
array[0] = "Mali";
array[1] = 2;
array[2] = function(name) {
    console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS, JS"};

console.log(array);
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
var names = ["Mali", "Jay", "Nishant", "Rohit"];
//console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("Hello " +names[i]);
}

names[100] = "Mali";
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}
//////////////////////////////////////////////////////

var names2 = ["Mali", "Jay", "Nishant", "Rohit"];

var myObj = {
    name: "Mali",
    course: "HTML, CSS, JS",
    platform: "Udemy",
};

for (var prop in myObj) {
    console.log(prop, myObj[prop]);
}

///////////////////////////////////////////////////////

var counter = 0;
var myArray = ["Mali", 2, {handle: "yaakin"}];
for (var i = 0; i < myArray.length; i++) {
    counter++;
}
console.log(counter);