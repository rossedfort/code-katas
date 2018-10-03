// http://www.codewars.com/kata/highest-and-lowest/train/javascript

function highAndLow(numbers) {
  const parsed = numbers.split(' ').map(Number);
  let max = -Infinity, min = Infinity;
  for (n of parsed) {
    if (n > max) max = n;
    if (n < min) min = n;
  }

  return [max, min].join(' ');
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
