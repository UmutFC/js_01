let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
// month is '0' based so it will be 1 minus of it
x = d.getMonth() + 1;
// day of the month
x = d.getDate();
// day of the week
x = d.getDay();

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Modern API for getting date
x = Intl.DateTimeFormat("tr-TR").format(d);
x = Intl.DateTimeFormat("default").format(d);

// we can use default format and pick specific date attribute and 'long' is for string format
x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

x = d.toLocaleDateString();
x = d.toLocaleString("default", { month: "short" });

x = d.toLocaleString("default", {
  month: "short",
  year: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Europe/Istanbul",
});

// you can type 'log' for console.log(); as shortcut
console.log(x);
