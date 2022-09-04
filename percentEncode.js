const urlEncode = function(text) {
  // Put your solution here
  let newText = text.trim(); //remove leading and trailing spaces
  let sentence = newText.split(""); //split sentence into an array of letters
  
  for (let i = 0; i <= sentence.length; i++) { //loop through array to find " "
    if(sentence[i] === " "){ //if " " is present
      sentence[i] = "%20"; // replce " " with "%20"
    }
  }
  
  sentence = sentence.join(""); //join letters in array
  return sentence;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));