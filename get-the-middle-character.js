// http://www.codewars.com/kata/get-the-middle-character/train/javascript

function getMiddle(s) {
  const halfLength = s.length / 2;
  return s.length % 2 ?
    s.substring(halfLength, halfLength + 1) : // odd
    s.substring(halfLength - 1, halfLength + 1);  // even
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");