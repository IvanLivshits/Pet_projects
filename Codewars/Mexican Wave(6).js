function wave(str) {
  strArr = str.toLowerCase().split(``);
  finalArr = [];

  for (let i = 0; i < str.length; i++) {
    strEl = ``;
    if (strArr[i] !== ` `) {
      for (let j = 0; j < str.length; j++) {
        if (i === j) {
          strEl += strArr[i].toUpperCase();
        } else {
          strEl += strArr[j];
        }
      }
      finalArr.push(strEl);
    }
  }
  return finalArr;
}

console.log(wave(`Hello world`));
