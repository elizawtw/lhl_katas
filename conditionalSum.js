const conditionalSum = function(values, condition) {
  // Your code here
  let finalNum = [];
  let total = 0;
  for (let value of values) {
    if (value % 2 === 0 && condition === "even"){
      finalNum.push(value);
    }
    else if (value % 2 !== 0 && condition === "odd") {
      finalNum.push(value);
    }
    
  }
  for (let num of finalNum) {
    total += num;
    
  }
  
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));