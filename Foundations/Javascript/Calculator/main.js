$ = function(id){
	return document.getElementById(id);
}

function game(){
    console.log("Hello");
}




window.onload = function(){
    document.getElementsByClassName("number").onclick = function(){game();}
    
}