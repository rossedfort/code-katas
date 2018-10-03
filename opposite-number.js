function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}

// const opposite = n => n > 0 ? -n : Math.abs(n);
const opposite = number => -number;

console.log(opposite(1), -1)
console.log(opposite(-1), 1)