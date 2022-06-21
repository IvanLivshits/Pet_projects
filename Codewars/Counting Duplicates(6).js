'use strict';

function duplicateCount(text){
  
    let txt = text.toLowerCase();
    let obj = {};
    
    for(let i = 0; i < txt.length; i++) {
        let counter = 0;
      for(let j = 0; j < txt.length; j++) {
        if(txt[i] === txt[j]) {
          counter += 1;
        }
      }
        obj[`${txt[i]}`] = counter
    }

    let finalCounter = 0;
    for (let key in obj) {
        obj[key] > 1 ? finalCounter++ : finalCounter
    }
    return finalCounter;
  }


duplicateCount("Indivisibilities")