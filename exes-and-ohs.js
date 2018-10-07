// https://www.codewars.com/kata/exes-and-ohs/train/javascript

function XO(str) {
  let [exes, ohs] = [0, 0];
  for (char of str) {
    if (/x/i.test(char)) exes++;
    if (/o/i.test(char)) ohs++;
  }
  return exes === ohs;
}

console.log(XO(''));
console.log(XO('xxxxxoooxooo'));
console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);