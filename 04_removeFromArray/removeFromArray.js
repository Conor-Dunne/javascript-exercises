const removeFromArray = function(array, ...args) {
    
    return array.filter(items => !args.includes(items));
};


console.log(removeFromArray([3,2,1], 3,1, "cow"));

// Do not edit below this line
module.exports = removeFromArray;
