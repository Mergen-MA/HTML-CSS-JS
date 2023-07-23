// function test() {
//     console.log(this);
//     this.myName = "Mali"
// }

// test()
// console.log(window.myName);



function Circle(radius) {
    console.log(this);
}

var myCircle = new Circle(10);
console.log(myCircle);


function Circle(radius) {
    this.radius = radius;

    this.getArea = 
        function() {
            return Math.PI * Math.pow(this.radius, 2);
        
};

}

var myCircle = new Circle(10);
console.log(myCircle);

function Circle(radius) {
    this.radius = radius;
}

// Using prototype to add a method to the Circle object.
// It ensures to save memory space. We don't have to create a new function everytime we want to use it. 
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);



function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() {
    console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();