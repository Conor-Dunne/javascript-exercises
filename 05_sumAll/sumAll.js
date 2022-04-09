const sumAll = function(num1,num2) {

if (num1 <0 || num2 <0 || typeof num1 != "number" || typeof num2 != "number") {

    return "ERROR";
} 

let arr = [num1, num2].sort((a, b) => a - b);
let total = 0;

for (let i = arr[0]; i < arr[1]+1; i++) {

    total +=i;

}

return total;

};

console.log(sumAll(1,4000));

// Do not edit below this line
module.exports = sumAll;
