const numberOfVowels = function(data) {
  // Put your solution here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let letter = data.split("");
  
  let result = [];
  
    for (let x of letter) {
      for(vowel of vowels) {
        if (vowel === x){
          result.push(x);
        }
      }
     
  }
  return result.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));