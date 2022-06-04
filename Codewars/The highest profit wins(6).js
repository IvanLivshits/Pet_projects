function minMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    } else {
      continue;
    }
    console.log(`max = ${max}, min = ${min}`);
  }
  return [max, min];
}

console.log(minMax([1]));
