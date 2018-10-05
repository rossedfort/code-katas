
// http://www.codewars.com/kata/find-the-parity-outlier/train/javascript

function findOutlier(numbers) {
  let isMostlyOdd = numbers.map(n => !(n % 2)).filter(b => b).length === 1;

  return isMostlyOdd ?
    numbers.find(n => Math.abs(n % 2) === 0) :
    numbers.find(n => Math.abs(n % 2) === 1);
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2,6,8,10,3]), 3);
console.log(findOutlier([0,0,3,0,0]), 3);
console.log(findOutlier([1,1,0,1,1]), 0);
console.log(findOutlier([105290144,-149032432,120198134,-60868130,-63083682,-27604226,-73230421]), -73230421);