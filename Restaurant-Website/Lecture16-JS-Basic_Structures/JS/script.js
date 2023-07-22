// *** String concatination

var string = "Hello";
string += " World";
console.log(string + "!")


// *** Regular math operators

console.log((5 + 4) / 3);
console.log(undefined / 5);

// *** Equality

var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}

// *** Strict Equality

if ( x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console.log("Strict: x='4' is not equal to y=4");
}

// *** If Statement (all false)

if ( false || null ||
      undefined || "" || 0 || NaN) {
        console.log("this line won't ever execute");
      }
else {
  console.log("All false");
}

// *** If Statement (all true)

if (true && "hello" && 1 && -1 && "false") {
  console.log("All True")
}

// *** Best practice for {} style
// Curly brace on the same or next line..

function a()
{
  return
  {
    name: "Mali"
  };
}

function b() {
  return {
    name: "Mali"
  };
}

console.log(a());
console.log(b());


// *** For Loop

var sum = 0;
for (i = 0; i < 10; i++) {
  console.log(i)
  sum = sum + i;
}

console.log("sum of 0 through 9 is: " + sum);

// Default Values

function orderChickenWith(sideDish) {
  // if (sideDish === undefined) {
  //   sideDish = "whatever!"
  // }

  sideDish = sideDish || "whatever!";
  console.log("chicken with " + sideDish)
}

orderChickenWith("noodles")
orderChickenWith()