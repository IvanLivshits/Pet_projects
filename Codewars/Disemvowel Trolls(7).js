function disemvowel(str) {
  let dictionary = [`e`, `u`, `i`, `o`, `a`, `E`, `U`, `I`, `O`, `A`];
  let strFinal = ``;

  for (let i = 0; i < str.length; i++) {
    let counter = 0;

    for (let j = 0; j < dictionary.length; j++) {
      if (str[i] !== dictionary[j]) {
        counter++;
      }
    }
    if (counter === dictionary.length) {
      strFinal += str[i];
    } else {
      continue;
    }
  }
  return strFinal;
}

console.log(disemvowel("This website is for losers LOL!"));
