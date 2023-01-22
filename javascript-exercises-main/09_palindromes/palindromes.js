const palindromes = function (start) {
    start = start.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
    let lower = start.toLowerCase()
    
    let split = lower.split("")
    let array = split.reverse()
    let end = array.join("")

    if(end == lower){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
