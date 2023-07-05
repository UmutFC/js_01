let x;

x = 5 + "5"; //output: 55 string

x = 5 + Number("5"); //output: 10 number

x = 5 * "5"; //output: 25 number - because there is no multiplication between strings so js decided to coerce it to a number then it could be multiplied

x = 5 + null; //output: 5 number

x = Number(null); // output: 0 number

x = Number(true); // output: 1 number
x = Number(false); // output: 0 number

x = 5 + true; // output: 6 number - because true is 1;

x = 5 + undefined; // output: NaN number

console.log(x, typeof x);
