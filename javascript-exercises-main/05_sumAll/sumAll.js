const sumAll = function(min, max) {
    let tot = 0

    if(typeof min === 'string' || min instanceof String || min instanceof Array || typeof max === 'string' || max instanceof String || max instanceof Array){
        return "ERROR"
    }
    else{
        if( min >= 0 && max >= 0){
            if(min > max){
                let temp = min
                min = max
                max = temp
            }

            for(let i=min;i<=max;i++){
                tot += i;
            }
        }
        else{
            return "ERROR"
        }

    }



    return tot
};

// Do not edit below this line
module.exports = sumAll;
