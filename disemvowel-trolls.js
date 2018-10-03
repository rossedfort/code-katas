// http://www.codewars.com/kata/disemvowel-trolls/train/javascript

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
)