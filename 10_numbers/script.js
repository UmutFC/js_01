let x;

const num = new Number("5.42");

x = num.toString();

// there is no length method for numbers so we turn it into a string
x = num.toString().length;

// toFixed(x) will give you x number of decimals that numbers
x = num.toFixed(2);

// toPrecision(x) will give you rounded version of number with x-1 decimals
x = num.toPrecision(3);

// will turn number to locale version of it
x = num.toLocaleString("ar-EG");
x = num.toLocaleString("en-US");

x = num.valueOf();

x = Number.MAX_VALUE; // this will give the largest number possible
x = Number.MIN_VALUE; // this will give the smallest number possible

console.log(x);
