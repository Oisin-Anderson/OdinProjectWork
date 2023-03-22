import { createTodo } from './todo';
import { deleteTodo } from './todo';
import { clearTodos } from './todo';
import { getTodo } from './todo';
import { createProject } from './project';
import { getAllProjects } from './project';
import { getProject } from './project';


window.onload = function(){
    //deleteTodo(1);
    //clearTodos();
    //createTodo(1, "Tinder", "Tinder App", "06/07/19", 4, false);
    //createProject("Plenty Of Fish", "Tinder App", "06/07/19", 4, false);
    //getTodo(1);

    getAllProjects();
}



window.onclick = function(event) {
    const modal = document.querySelector(".modalContent");
    const display = document.querySelector(".projectModal");
    if (event.target == modal) {
        display.style.display = "none";
    }
}