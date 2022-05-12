const palindromes = function (string) {
    const forwards = string.toUpperCase().split(" ").join("").replace(/[^a-zA-Z]/g,"");
    const backwards = forwards.split("").reverse().join("");
    return forwards === backwards;
};


// Do not edit below this line
module.exports = palindromes;
