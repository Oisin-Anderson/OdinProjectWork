$ = function(id){
	return document.getElementById(id);
}
$$ = function(id){
	return document.getElementsByClassName(id);
}
var numbers = [];
var operators = ["blank"];
var number = "";

function round(float){
    return parseInt(float * 1000) /1000.0;
}

function clear(){
    numbers = []
    operators = ["blank"];
    $("result").innerHTML = "0";
    number = ""
    $("dot").disabled = false;
}

function nums(i){
    var numerator = $$("number");
    var numb = numerator[i].innerHTML;
    if(numb == "B"){
        let string = number;
        let check = "";
        console.log(string);
        string = string.substring(0, string.length-1);
        check = string.substring(string.length-1);
        console.log(string);
        $("result").innerHTML = string;
        number = string;
        if(check == "."){
            $("dot").disabled = false;
        }
    }else{
        if(numb == "."){
            $("dot").disabled = true;
            number += numb;
            $("result").innerHTML = number;
            console.log(number);

        }else{
            number += numb;
            $("result").innerHTML = parseFloat(number);
            console.log(number);
        }
    }
}
function opps(i){
    var operator = $$("operator");
    var opp = operator[i].getAttribute('id');
    console.log(opp);
    if(number == ""){
        numbers.push(parseFloat($("result").innerHTML));
    }else{
        numbers.push(parseFloat(number));
        console.log(numbers);
        number = 0;
    }
    
    if(opp == "equal"){
        operators.push(opp);
        calculation();
        console.log("Calculation")
    }else if(opp == "clear"){
        clear();
    }else{
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
            if(result == 0 && numbers[i] == 0){
                alert("IMPOSSIBLE");
            }else{
                result = result/numbers[i];
            }
        }
        else if(operators[i] == "blank"){

        }
        else{
            $("result").innerHTML = round(result);
            numbers = []
            operators = ["blank"]
        }
    }
}



window.onload = function(){
    clear();
    var numerator = $$("number");
    for(let i=0;i<numerator.length;i++){
        numerator[i].addEventListener("click", function(){
            nums(i);
        });
    }
    var operator = $$("operator");
    for(let i=0;i<operator.length;i++){
        operator[i].addEventListener("click", function(){
            opps(i);
        });
    }

}
    