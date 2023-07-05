// Converting string to number
// let amount = "100";

// amount = parseInt(amount);

// there is new way to converting the operand which is called 'Unary'
// amount = +amount;

// this one is also coverts operant into a number then negates it
// amount = -amount;

// there is also Number() function to converting string into a number
// amount = Number(amount);

//-----------------------------------------------------------------------------

//Converting number to string
// let amount = 100;

// Even though integers are primitive type of value and it doesnt intrinsically have any methods, but since we're trying to use toString() on it, JS creates a temporary wrapper of associated type
// amount = amount.toString();

// there is also String() function to converting number into a string
// amount = String(amount);

//-----------------------------------------------------------------------------

// Converting string to decimal
// let amount = "99.5";

// amount = parseFloat(amount); // output: 99.5 'number'

// amount = parseInt(amount); // output: 99 'number'

//-----------------------------------------------------------------------------

// Converting number to boolean
// let amount = 1;

// amount = Boolean(amount); // 1: true, 0: false

//-----------------------------------------------------------------------------

// NaNs
let amount = "hello";

amount = parseInt(amount); // NaN 'number' - NAN: not a number

// These are all NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);
