// Arithmetic Operators---------------------------------------------------------
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;

// this gives us the remainder
x = 5 % 5; // output: 0
x = 7 % 5; // output: 2

// this is for creating 'Exponential Numbers'
x = 2 ** 3;

// Concatenation----------------------------------------------------------------
x = "Hello" + "World";

// Increment & Decrement--------------------------------------------------------
x = 1;
// x = x + 1;
// x++;

// x = x - 1;
// x--;

// Assignment Operators---------------------------------------------------------
x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// Comparing Operators----------------------------------------------------------
x = 2 == 2; // output: true;
x = 2 === 2; // output: true;

x = 2 == "2"; // output: true; // the reason of why this returns true is '==' does not test the type but test the actual value inside.

x = 2 === "2"; // output: false; // this is false because '===' is not only testing the value but also type - 2 is number, '2' is string

x = 2 != 2; // output: false;
x = 2 != "2"; // output: false;

x = 2 !== 2; // output: false;
x = 2 !== "2"; // output: true;

console.log(x);
