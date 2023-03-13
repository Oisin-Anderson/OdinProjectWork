import { homeLoad } from './home';
import { navLoad } from './nav';
import { menuLoad } from './menu';
import { contactLoad } from './contact';

$ = function(id){
	return document.getElementById(id);
}

window.onload = function(){
    homeLoad();
    navLoad();
    $("menu").onclick = function(){menuLoad();}

}