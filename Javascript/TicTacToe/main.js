$ = function(id){
	return document.getElementById(id);
}
$$ = function(id){
	return document.getElementsByClassName(id);
}

const gameBoard = (() => {
    let moves = ["","","","","","","","",""]
    let turns = 0
    let symbol = "X"
    let record = ["","",""]
    let player1 = "X";
    let player2 = "O";
    const restart = () => {
        record = ["","",""];
        player1 = "X";
        player2 = "O";
        clear();
    };
    const clear = () => {
        moves = ["","","","","","","","",""];
        turns = 0;
        symbol = "X";
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
        //Horizontal Win
        for (let i=0; i<=6; i+=3) {
            if (moves[i] == symbol &&
                    moves[i + 1] == symbol &&
                    moves[i + 2] == symbol)
                endGame(symbol);
        }

        //Vertical Win
        for (let i=0; i<3; i++) {
            if (moves[i] == symbol &&
                    moves[i + 3] == symbol &&
                    moves[i + 6] == symbol)
                endGame(symbol);
        }

        //Diagonal Win
        if (moves[4] == symbol && ((moves[0] == symbol && moves[8] == symbol) || (moves[6] == symbol && moves[2] == symbol)))
            endGame(symbol);
    }
    const endGame = (symbol) => {
        if(player1 == symbol){
            record[0]++;
            $("winner").innerHTML = "Game Over, Player1 Wins!!!";
        }else if(player2 == symbol){
            record[2]++;
            $("winner").innerHTML = "Game Over, Player2 Wins!!!";
        }else{
            record[1]++;
            $("winner").innerHTML = "Game Over, Draw!!!";
        }

        if(player1 == "X"){
            player1 = "O";
            player2 = "X";
        }else{
            player1 = "X";
            player2 = "O";
        }

        $("record").innerHTML = record[0]+"|"+record[1]+"|"+record[2];


    }
    return {
        makeMove,
        board,
        newTurn,
        checkTurn,
        clear,
        checkSpace,
        checkWin,
        restart
    };
})();

const display = (() => {
    const start = () => {
        console.log("Here");
        $("board").innerHTML = "";
        const board = $("board");
        for(let i=0; i<9; i++){
            const div = document.createElement('div');
            div.textContent = " ";
            div.onclick = function(){gameBoard.makeMove(this.value)};
            div.value = i;
            div.id = "square" + i;
            div.style.fontSize = "100px";
            div.style.backgroundColor = 'red';
            div.style.width = "100px"
            div.style.height = "100px"
            div.style.border = "5px solid black";
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
    $("clear").onclick = function(){gameBoard.clear()};
    $("restart").onclick = function(){gameBoard.restart()};
}