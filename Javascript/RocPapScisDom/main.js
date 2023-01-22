$ = function(id){
	return document.getElementById(id);
}

$$ = function(id){
	return document.querySelector(id);
}

var playChoice = "";
var compChoice = "";
var count = Array(0, 0, 0)

function getCompChoice(){
    let choices = Array("rock", "paper", "scissors");
    let compchoice = choices[Math.floor(Math.random()*choices.length)];
    return compchoice;
}

function decider(play, comp){
    if((play == "rock" && comp == "scissors") || (play == "scissors" && comp == "paper") || (play == "paper" && comp == "rock")){
        //console.log("Player wins.");
        return "P";
    }
    else if(play == comp){
        //console.log("Chose The Same. No Winner.");
        return "D";
    }
    else{
        //console.log("Computer Wins.");
        return "C"
    }
}

function game(player){
    let win = "";
    let outcome = "";
    compChoice = getCompChoice();
    outcome = decider(player, compChoice);
    if(outcome == "P"){
        win = "Player Wins";
        count[0] += 1;
    }
    else if(outcome == "D"){
        win = "Draw";
        count[1] += 1;
    }
    else if(outcome == "C"){
        win = "Computer Wins";
        count[2] += 1;
    }

    const container = $$("#results");
    const div = document.createElement('div');
    
    const winner = document.createElement('h2');
    winner.textContent = win;
    div.appendChild(winner);
    
    const score = document.createElement('h4');
    score.textContent = "P: "+count[0]+",D: "+count[1]+",C: "+count[2];
    div.appendChild(score);
    container.appendChild(div);
}

window.onload = function(){
    $("rock").onclick = function(){game("rock");}
    $("scissors").onclick = function(){game("scissors");}
    $("paper").onclick = function(){game("paper");}
    
}