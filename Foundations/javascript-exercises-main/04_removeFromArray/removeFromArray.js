const removeFromArray = function(sarr, var1, var2, var3, var4) {
    let farr = sarr
    if(var1 != null){
        farr = farr.filter(data => data != var1);
    }
    if(var2 != null){
        farr = farr.filter(data => data != var2);
    }
    if(var3 != null){
        farr = farr.filter(data => data != var3);
    }
    if(var4 != null){
        farr = farr.filter(data => data != var4);
    }

    return farr
};

// Do not edit below this line
module.exports = removeFromArray;
