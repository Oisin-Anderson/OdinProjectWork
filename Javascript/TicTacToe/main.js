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
    const clear = () => {
        moves = ["","","","","","","","",""];
        turns = 0;
        symbol = "X";
    };
    const newTurn = () => turns++;
    const checkSpace = (position) => {
        if(moves[position] == ""){
            return true
        }else{
            return false
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
            newTurn();
        }
    };
    const board = () => moves;
    return {
        makeMove,
        board,
        newTurn,
        checkTurn,
        clear,
        checkSpace
    };
})();

const display = (() => {
    const start = () => {
        console.log("Here");
        const board = $("board");
        for(let i=0; i<9; i++){
            const div = document.createElement('div');
            div.textContent = " ";
            div.onclick = function(){gameBoard.makeMove(this.value)};
            div.value = i;
            div.id = "square" + i;
            div.style.fontSize = "30px";
            div.style.backgroundColor = 'red';
            div.style.width = "100px"
            div.style.height = "100px"
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
    gameBoard.clear();
    display.start();
}


window.onload = function(){
    startGame();
}