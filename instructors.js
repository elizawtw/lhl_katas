const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let nameLength = [{
    name: "", course: ""
  }];
  for (let instructor of instructors) {

    if(instructor.name.length > nameLength[0].name.length) {
     
      nameLength[0].name = instructor.name;
      nameLength[0].course = instructor.course;
    
      }
  
}

return nameLength;
};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));