const fibonacci = function(input) {

    let first = 0
    let second = 1
    let temp = 0

    if(input < 0){
        return "OOPS"
    }

    for(let i = 0; i<input; i++){
        temp = second
        second += first
        first = temp
    }

    return first

};

// Do not edit below this line
module.exports = fibonacci;
