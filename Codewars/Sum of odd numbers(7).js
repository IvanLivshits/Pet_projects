function rowSumOddNumbers(n) {
  let sum = 0;
  let a;
  for (let i = 1; i <= 2 * n - 1; i++) {
    if (i % 2 === 0) {
      sum += 0;
    } else if (sum === 0) {
      a = n ** 2 - (n - 1);
      sum += a;
    } else if (sum !== 0) {
      a += 2;
      sum += a;
    }
  }
  return sum;
}

console.log(rowSumOddNumbers(5));
