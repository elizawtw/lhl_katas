const calculateChange = function(total, cash) {
  // Your code here
  //denominations $20 (2000), $10 (1000), $5 (500), $2 (200), $1 (100), $0.25 (25), $0.10 (10), $0.05 (5), $0.01 (1)
  //cash - total = change
  //find total amount of change for cashier to give back
  let denominations = {
    twentyDollars : 2000,
    tenDollars : 1000,
    fiveDollars : 500,
    twoDollars : 200,
    oneDollar : 100,
    quarter : 25,
    dime : 10,
    nickel : 5,
    penny : 1
  }

  let change = cash - total;
  for (denom in denominations) {
    let x = Math.floor(change/denominations[denom]);
    //console.log('x,',x)
    change -= denominations[denom] * x;
    //console.log('change',change)
    denominations[denom] = x;

    if(denominations[denom] === 0) {
      delete denominations[denom];
    }
  }
  return denominations;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));