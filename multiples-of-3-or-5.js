// http://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

function solution(number) {
  let multiples = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples.reduce((sum, multiple) => {
    sum += multiple;
    return sum;
  }, 0);
}

function solution(number) {
  if (number < 3) {
    return 0;
  }

  return new Array(number - 1)
    .fill(0)
    .map((num, index) => num + index + 1)
    .reduce((multiples, i) => {
      if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
      }
      return multiples;
    }, [])
    .reduce((sum, multiple) => sum += multiple, 0);
}

console.log(solution(10), 23);
