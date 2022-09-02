const sumLargestNumbers = function(data) {
  // Put your solution here
  let sum = 0;
  const sorted = data.sort(function (a,b) {
    return b-a
  });
  sum = sorted[0] + sorted[1];
  return sum;
  }


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));