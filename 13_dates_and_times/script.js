let d;

d = new Date();

// type of date is object
// console.log(typeof d);

// d = d.toString();
// or  you can change the type of date as string
// console.log(typeof d);

// month is '0' index so, 0 is january and so on
d = new Date(2021, 0, 10, 12, 30, 0);
// you can also add hours

// you can put T end of the date and enter the time
d = new Date("2021-07-10T12:30:00");

// another version for entering time
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");
d = new Date("07-10-2022");

// Unix Timestamp - An Integer that represents the number of seconds that's passed since the date of January 1st, 1970 which is arbitrary date

// timestamp expressed in milliseconds
d = Date.now();

d = new Date("07-10-2022 12:30:00");

// to get timestamp of a date
d = d.getTime();
d = d.valueOf();

// you can use timestamp to find date
d = new Date(1657445400000);

// timestamp in seconds
d = Math.floor(Date.now() / 1000);

console.log(d);
