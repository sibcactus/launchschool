function isLeapYear(y) {
  return (y % 4 === 0 && y < 1752) ||
         (y % 4 === 0 && y % 100 !== 0) ||
         (y % 400 === 0);
}

//y >= 1752:
//(y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)
//y < 1752:
//(y % 4 === 0 && y < 1752) || (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true