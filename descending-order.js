// https://www.codewars.com/kata/descending-order/train/javascript

function descendingOrder(n) {
  return Number(n.toString().split('').map(Number).sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)