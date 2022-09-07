const multiplicationTable = function(maxValue) {
  // Your code here
  let table = [];
  for (let r = 1; r < maxValue + 1; r++) {
    
    for (let c = 1; c < maxValue + 1; c++){
      table += r*c + " ";
    }
    table = table + '\n';
  }
  
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));