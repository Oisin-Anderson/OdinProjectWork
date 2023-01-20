$ = function(id){
	return document.getElementById(id);
}
$$ = function(id){
	return document.getElementsByClassName(id);
}
var numbers = [];
var operators = ["blank"];
var number = 0;

function nums(i){
    var numerator = $$("number");
    number += numerator[i].innerHTML;
}
function opps(i){
    var operator = $$("operator");
    var opp = operator[i].getAttribute('id');
    if(number == 0){
        numbers.push(parseInt($("result").innerHTML));
    }
    else{
        numbers.push(parseInt(number));
        console.log(numbers);
        number = 0;
    }
    
    if(opp == "equal"){
        operators.push(opp);
        calculation();
        console.log("Calculation")
    }
    else if(opp == "clear"){
        numbers = []
        operators = ["blank"];
        $("result").innerHTML = "0";
    }
    else{
        operators.push(opp);

    }
    console.log(operators);

}

function calculation(){
    var result = numbers[0];
    for(let i=1;i<operators.length;i++){
        if(operators[i] == "add"){
            result += numbers[i];
        }
        else if(operators[i] == "sub"){
            result -= numbers[i];
            
        }
        else if(operators[i] == "mul"){
            result = result * numbers[i];
            
        }
        else if(operators[i] == "div"){
            result = result/numbers[i];
        }
        else if(operators[i] == "blank"){

        }
        else{
            $("result").innerHTML = result;
            numbers = []
            operators = ["blank"]
        }
    }
}



window.onload = function(){
    var numerator = $$("number");
    for(let i=0;i<10;i++){
        numerator[i].addEventListener("click", function(){
            nums(i);
        });
    }
    var operator = $$("operator");
    for(let i=0;i<8;i++){
        operator[i].addEventListener("click", function(){
            opps(i);
        });
    }

}
    