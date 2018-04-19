const isLeapYear = function (year) {
  let leapYear = "isn't";
  if (year%4 === 0 ) {
    leapYear = "is";
  }
  if (year%100 === 0 && year%400 !== 0) {
    leapYear = "isn't";
  }
  console.log(`${year} ${leapYear} a leap year`);
};
for (i=1; i<=2018; i++) {
  isLeapYear(i);
}
