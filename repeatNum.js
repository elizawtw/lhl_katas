//two dimensional array (an array of arrays), where each sub-array will have two numeric values
// [[a,b],[c,d]]  first value is value to repeat, second value is amount of times to repeat

const repeatNumbers = function(data) {
  // Put your solution 
  let repeat = [];
 
  for (let y = 0; y < data.length; y++) {
    
    for(let x = 0; x < data[y][1]; x++){
      repeat += data[y][0];
      
    }
    if (y < data.length - 1) {
      repeat += ",";
    }
  }
  return repeat;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
