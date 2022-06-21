function DNAStrand(dna){
  let finishStr = ''
  dna.split('').forEach(element => {
    switch (element) {
      case 'A':
        finishStr += 'T'
        break;
      case 'T':
        finishStr += 'A'
        break;
      case 'C':
        finishStr += 'G'
        break;
      case 'G':
        finishStr += 'S'
        break;
  
      }
  });
  return finishStr
}

console.log(DNAStrand('AAAAATTTGC'))

