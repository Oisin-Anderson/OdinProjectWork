$ = function(id){
	return document.getElementById(id);
}

function checkPassword(form) {
    pwd = form.pwd.value;
    cpwd = form.cpwd.value;

    if (pwd != cpwd) {
        alert ("\nPassword did not match: Please try again...")
    }

    else{
        alert("Welcome to the Lannister Army")
    }
}