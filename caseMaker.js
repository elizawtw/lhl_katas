const camelCase = function(input) {
  // Your code here
  let newCase = input.split(" "); //split string into an array of strings
  //loop through each element of the array and capitalize the first letter
  for (let y = 1; y < newCase.length; y++) {
    newCase[y] = newCase[y].charAt(0).toUpperCase() + newCase[y].slice(1);
   
  }
  //join all elements into a string
  newCase = newCase.join("");
  return newCase;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));