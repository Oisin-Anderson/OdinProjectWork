import { navLoad } from './nav';
import { homeLoad } from './home';
import { menuLoad } from './menu';
import { contactLoad } from './contact';

navLoad();
homeLoad();
let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let contactButton = document.querySelector("#contact");
let modalButton = document.querySelector("#openModal");

document.addEventListener('DOMContentLoaded', function () {
    homeButton = document.querySelector("#home");
    menuButton = document.querySelector("#menu");
    contactButton = document.querySelector("#contact");
    modalButton = document.querySelector("#openModal");
} );

document.addEventListener('DOMContentLoaded', function () {
    homeButton.addEventListener("click", function(){
        homeLoad();
    });
} );

document.addEventListener('DOMContentLoaded', function () {
    menuButton.addEventListener("click", function(){
        menuLoad();
    });
} );

document.addEventListener('DOMContentLoaded', function () {
    contactButton.addEventListener("click", function(){
        contactLoad();
    });
} );

document.addEventListener('DOMContentLoaded', function () {
    modalButton.addEventListener("click", function(){
        modal();
    });
} );


function modal(){
    const modal = document.querySelector("#videoModal");
    modal.style.display = "block";
}

window.onclick = function(event) {
    const modal = document.querySelector("#modalContent");
    const display = document.querySelector("#videoModal");
    if (event.target == modal) {
        display.style.display = "none";
    }
}
