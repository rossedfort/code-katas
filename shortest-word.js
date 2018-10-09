// http://www.codewars.com/kata/shortest-word/train/javascript

function findShort(s){
  let shortest = Infinity;
  s.split(' ').forEach(w => {
    if (w.length < shortest) shortest = w.length;
  });
  return shortest;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);