function multisum(num) {
  if (num >= 3) {
    return (num % 3 === 0 || num % 5 === 0) ?
      num + multisum(num - 1) : multisum(num - 1);
  } else {
    return 0;
  }
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168