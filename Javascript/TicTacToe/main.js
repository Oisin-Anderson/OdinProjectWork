$ = function(id){
	return document.getElementById(id);
}
$$ = function(id){
	return document.getElementsByClassName(id);
}

const gameBoard = (() => {
    let moves = ["","","","","","","","",""]
    let turns = 0
    let symbol = "X";
    let record = [0,0,0]
    let player1 = "X";
    let player2 = "O";
    let round = 0;
    const restart = () => {
        record = [0,0,0];
        player1 = "X";
        player2 = "O";
        round = 0;
        $("record").innerHTML = "0|0|0";
        $("symbol1").innerHTML = player1;
        $("symbol2").innerHTML = player2;
        clear();
    };
    const nextGame = () => {
        clear();
        if(round%2 == 0){
            player1 = "X";
            player2 = "O";
            $("turn1").innerHTML = "Your Move";
            $("turn2").innerHTML = "Their Move";
        }else{
            player1 = "O";
            player2 = "X";
            $("turn2").innerHTML = "Your Move";
            $("turn1").innerHTML = "Their Move";
        }
        $("symbol1").innerHTML = player1;
        $("symbol2").innerHTML = player2;

    };
    const clear = () => {
        moves = ["","","","","","","","",""];
        turns = 0;
        symbol = "X";
        $("winner").innerHTML = "";
        display.start();
    };
    const newTurn = () => turns++;
    const checkSpace = (position) => {
        if(moves[position] == ""){
            return true
        }else{
            return false
        }
    };
    const checkPlayer = (symbol) => {
        if(player1 != symbol){
            $("turn1").innerHTML = "Your Move";
            $("turn2").innerHTML = "Their Move";
        }else{
            $("turn2").innerHTML = "Your Move";
            $("turn1").innerHTML = "Their Move";
        }
    };
    const checkTurn = () => {
        if(turns%2 == 0){
            return symbol = "X"
        }else{
            return symbol = "O"
        }
    };
    const makeMove = (position) => {
        console.log(checkTurn());
        let check = display.update(position, checkTurn());
        if(check == true){
            moves[position] = checkTurn();
            checkWin(checkTurn());
            checkPlayer(checkTurn());
            newTurn();
        }
    };
    const board = () => moves;
    const checkWin = (symbol) => {
        let check = 0;
        //Horizontal Win
        for(let i=0; i<=6; i+=3) {
            if(moves[i] == symbol && moves[i + 1] == symbol && moves[i + 2] == symbol){
                check++;
                $("square"+i).style.color = "white";
                $("square"+(i+1)).style.color = "white";
                $("square"+(i+2)).style.color = "white";
                endGame(symbol);
            }
        }

        //Vertical Win
        for(let i=0; i<3; i++) {
            if(moves[i] == symbol && moves[i + 3] == symbol && moves[i + 6] == symbol){
                check++;
                $("square"+i).style.color = "white";
                $("square"+(i+3)).style.color = "white";
                $("square"+(i+6)).style.color = "white";
                endGame(symbol);
            }
        }

        //Diagonal Wins
        if(moves[4] == symbol && moves[0] == symbol && moves[8] == symbol){
            check++;
            $("square0").style.color = "white";
            $("square4").style.color = "white";
            $("square8").style.color = "white";
            endGame(symbol);
        }
        if(moves[4] == symbol && moves[6] == symbol && moves[2] == symbol){
            check++;
            $("square2").style.color = "white";
            $("square4").style.color = "white";
            $("square6").style.color = "white";
            endGame(symbol);
        }

        if(turns == 8 && check == 0){
            endGame("D");
        }
    }
    const endGame = (symbol) => {
        round++;
        const next = document.createElement('div');
        const winner = document.createElement('div');
        next.textContent = "Next Game";
        next.onclick = function(){gameBoard.nextGame()}
        next.style.padding = "5px";
        next.style.backgroundColor = "lightblue";
        next.style.width = "100px";
        next.style.display = "flex"
        next.style.justifyContent = "center"
        next.style.alignItems = "center"
        next.style.borderRadius = "5px";
        next.style.marginBottom = "5px";
        next.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        winner.style.backgroundColor = "lightblue";
        winner.style.padding = "5px";
        winner.style.borderRadius = "5px";
        winner.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        if(player1 == symbol){
            record[0]++;
            winner.textContent = "Game Over, Player1 Wins!!!";
        }else if(player2 == symbol){
            record[2]++;
            winner.textContent = "Game Over, Player2 Wins!!!";
        }else{
            record[1]++;
            winner.textContent = "Game Over, Draw!!!";
        }
        $("winner").appendChild(winner);
        $("winner").appendChild(next);

        if(player1 == "X"){
            player1 = "O";
            player2 = "X";
        }else{
            player1 = "X";
            player2 = "O";
        }

        let first = record[0]+0;
        let second = record[1]+0;
        let third = record[2]+0;
        $("record").innerHTML = first+"|"+second+"|"+third;
        const board = $("board");
        board.style.pointerEvents = "none";


    }
    return {
        makeMove,
        board,
        newTurn,
        checkTurn,
        clear,
        checkSpace,
        checkWin,
        restart,
        nextGame
    };
})();

const display = (() => {
    const start = () => {
        console.log("Here");
        $("board").innerHTML = "";
        const board = $("board");
        board.style.pointerEvents = "all";
        for(let i=0; i<9; i++){
            const div = document.createElement('div');
            div.textContent = " ";
            div.onclick = function(){gameBoard.makeMove(this.value)};
            div.value = i;
            div.id = "square" + i;
            div.style.fontSize = "100px";
            div.style.backgroundColor = 'lightblue';
            div.style.width = "100px"
            div.style.height = "100px"
            div.style.border = "2px solid black";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            board.appendChild(div);
        }
    };
    const update = (square, symbol) => {
        console.log("Update");
        let check = gameBoard.checkSpace(square);
        console.log(check);
        if(check == true){
            console.log("True")
            for(let i=0; i<9; i++){
                if(i == square){
                    let id = "square" + i;
                    const div = $(id);
                    div.innerHTML = symbol;
                }
            }
            return true;
        }
        return false;
    };
    return {
        start,
        update
    };
})();



function startGame(){
    gameBoard.restart();
    display.start();
}


window.onload = function(){
    startGame();
    $("restart").onclick = function(){gameBoard.restart()};
    $("opponent").onclick = function(){gameBoard.opponent()};
}