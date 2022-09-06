const checkAir = function (samples, threshold) {
  // Code here!
  //with threshold of 0.4, function will determine whether the air samples are clean or dirty
  //air is clean if threshold < 0.4
  // air is dirty if threshold is  > 0.4
let dirtyAir = 0;
let cleanAir = 0;

for (let x = 0; x < samples.length; x++) {
  if (samples[x] === "clean") {
    cleanAir++;
  }
  else if (samples[x] === "dirty") {
    dirtyAir++;
  }

}
if ((dirtyAir / (dirtyAir +cleanAir)) > threshold ) {
   
  return "Polluted";
  
}
if ( (dirtyAir / (dirtyAir +cleanAir)) < threshold)  {
  
    return "Clean";
  
}

};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))