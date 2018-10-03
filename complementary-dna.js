// http://www.codewars.com/kata/complementary-dna/train/javascript

function DNAStrand(dna){
  return dna.split('').map(c => {
    if (c === 'A') return 'T';
    if (c === 'T') return 'A';
    if (c === 'G') return 'C';
    if (c === 'C') return 'G';
  }).join('');
}

function DNAStrand(dna) {
  const map = { A: 'T', T: 'A', C: 'G', G: 'C' }
  return dna.replace(/[ATCG]/g, match => map[match]);
}

console.log(DNAStrand("AAAA"),"TTTT");
console.log(DNAStrand("ATTGC"),"TAACG");
console.log(DNAStrand("GTAT"),"CATA");