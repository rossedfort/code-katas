// http://www.codewars.com/kata/square-every-digit/train/javascript

function squareDigits(num) {
  return Number(num.toString().split('').map(n => n ** 2).join(''));
}

console.log(squareDigits(9119), 811181);
