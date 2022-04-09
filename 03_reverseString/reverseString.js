
const reverseString = function(string) {
    let i = string.length-1;
    let revString = "";
    
    for (i; i >= 0; i--) {

        revString += string[i];

    } 

    return revString;

};

console.log(reverseString("cat"));

// Do not edit below this line
module.exports = reverseString;
