const fibonacci = function (num) {
    const userIndex = parseInt(num) - 1;
    let arr = [1, 1, 2, 3, 5, 8];
    let lastIndex = arr.length - 1;

    if (userIndex < 0) {
        return "OOPS";
    }
    else if (lastIndex >= userIndex) {
        return arr[userIndex];
    }
    else {
        while (lastIndex < userIndex) {
            arr.push(arr[lastIndex] + arr[lastIndex - 1]);
            lastIndex = arr.length - 1;
        }
        return arr[userIndex];
    }

};


// Do not edit below this line
module.exports = fibonacci;
