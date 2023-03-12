$ = function(id){
	return document.getElementById(id);
}
$$ = function(id){
	return document.getElementsByClassName(id);
}

function createContent(){
    let content = document.querySelector("#content");
    let nav = document.createElement('div');
    let logo = document.createElement('div');
    let tabs = document.createElement('div');
    let home = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');
    nav.classList.add("nav");
    tabs.classList.add("tabs");
    logo.textContent = "ShannonBridge Fort"
    home.textContent = "Home"
    menu.textContent = "Menu"
    contact.textContent = "Contact"
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    nav.appendChild(logo);
    nav.appendChild(tabs);

    let homeimg = document.createElement('div');
    let homeintro = document.createElement('div');
    homeimg.classList.add("homeimg");
    homeintro.textContent = "Discover This Iconic Fort On The Banks Of The River Shannon";
    homeimg.appendChild(homeintro);

    content.appendChild(nav);
    content.appendChild(homeimg);
}



window.onload = function(){
    createContent();
}