

const repeatString = function(string, num) {
let result = "";
let i = 0;

if (num < 0) {
    result = "ERROR";
}   else {
    
    for (i; i < num; i++) {
		
        result = result.concat(string);
    
    }

}



    return result;

};




// Do not edit below this line
module.exports = repeatString;
