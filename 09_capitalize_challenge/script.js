const myString = "developer";

let solutionOne;
let solutionTwo;
let solutionThree;

solutionOne = myString.charAt(0).toUpperCase() + myString.substring(1);
solutionTwo = myString[0].toUpperCase() + myString.slice(-8, 9);
solutionThree = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(solutionOne);
console.log(solutionTwo);
console.log(solutionThree);
