const ftoc = function(f) {

let result = ((f - 32) * 5/9).toFixed(1);

if (result == 0) return(0);
else return Number(result);

};



const ctof = function(c) {

  let result = (c * 9/5 + 32).toFixed(1);

  if (result == 0) return(0);
  else return Number(result);


};


console.log(ctof(73.2));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


//ftoc (1034°F − 32) × 5/9 = 556.667°C
//ctof  [°F] = [°C] × 9⁄5 + 32
