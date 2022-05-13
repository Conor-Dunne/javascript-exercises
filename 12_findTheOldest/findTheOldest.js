const findTheOldest = function(array) {
const currYear = new Date();
const ages = array.map(
    obj => !obj.yearOfDeath? 
    obj.age = currYear.getFullYear() - obj.yearOfBirth : 
    obj.age = obj.yearOfDeath - obj.yearOfBirth)

array.sort((a,b) => a.age - b.age);
return array[array.length -1]
};


// Do not edit below this line
module.exports = findTheOldest;
