var playChoice = "";
var compChoice = "";

function getPlayChoice(){
    let play = prompt("Rock, Paper, Scissors?");
    return play;
}

function getCompChoice(){
    let choices = Array("Rock", "Paper", "Scissors");
    let compchoice = choices[Math.floor(Math.random()*choices.length)];
    return compchoice;
}

function lowercase(choice){
    return choice.toLowerCase();
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

function game(){
    let count = Array(0, 0, 0)
    let i = 0;
    let outcome = "";
    for(i = 0; i < 5; i++){
        playChoice = getPlayChoice();
        playChoice = lowercase(playChoice);
        compChoice = getCompChoice();
        compChoice = lowercase(compChoice);
        outcome = decider(playChoice, compChoice);
        if(outcome == "P"){
            count[0] += 1;
        }
        else if(outcome == "D"){
            count[1] += 1;
        }
        else if(outcome == "C"){
            count[2] += 1;
        }
    }

    console.log(i + " Games Played");
    console.log("Player: "+ count[0]);
    console.log("Draw: "+ count[1]);
    console.log("Computer: "+ count[2]);
}

window.onload = function(){
    game();
    
}