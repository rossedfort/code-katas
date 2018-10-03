// http://www.codewars.com/kata/find-the-odd-int/train/javascript

function findOdd(A) {
  const occurrences = A.reduce((occurrences, number) => {
    occurrences[number] = occurrences[number] ? occurrences[number] + 1 : 1;
    return occurrences;
  }, {});
  const numbers = Object.keys(occurrences).map(Number);
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const count = occurrences[number];
    if (count % 2 === 1) return number;
  }
}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);