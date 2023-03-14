import { navLoad } from './nav';
import { homeLoad } from './home';
import { menuLoad } from './menu';
import { contactLoad } from './contact';

navLoad();
homeLoad();
let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let contactButton = document.querySelector("#contact");

document.addEventListener('DOMContentLoaded', function () {
    homeButton = document.querySelector("#home");
    menuButton = document.querySelector("#menu");
    contactButton = document.querySelector("#contact");
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
