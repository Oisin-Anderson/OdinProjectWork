const reverseString = function(start) {
    let split = start.split("")
    let array = split.reverse()
    let end = array.join("")

    return end
};

// Do not edit below this line
module.exports = reverseString;
