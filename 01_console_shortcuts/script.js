console.log("hello");

// you can clear console with clear(); function
// also you can do 'Ctrl + L ' or reload (F5) the page

//if we write 'console' to console we can see console object methods

// you can console log objects as table
console.table({ name: "Furkan", email: "furkancomalak@gmail.com" });

const x = 100;
// you can group the console outputs with group simple and groupEnd
console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: white; color: green";
// you can apply CSS styles on console logs with creating CSS style variable and then add %c to beginning of the text and add ', the style ' as second parameter of console log

console.log("%cHello Worlds", styles);

//-----------------------------------------------------------------------------

// you can hold Shit + Up/Down arrows and pick the lines you want

// Shift + Alt + 'A'  commenting with /* */
// Ctrl + K + C commenting with //
// Ctrl + K + U uncommenting the //

// Opening terminal shortcut Ctrl + 'é"'
