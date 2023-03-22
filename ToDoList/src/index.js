import { createTodo } from './todo';
import { deleteTodo } from './todo';
import { clearTodos } from './todo';
import { getTodo } from './todo';
import { createProject, getAllProjects, getProject } from './project';
import { createProjectModal } from './dom';


window.onload = function(){
    //deleteTodo(1);
    //clearTodos();
    //createTodo(1, "Tinder", "Tinder App", "06/07/19", 4, false);
    //createProject("Plenty Of Fish", "Tinder App", "06/07/19", 4, false);
    //getTodo(1);

    if(localStorage.getItem("Projects") == null){
        console.log("Default Project")
    }else{
        getAllProjects();
        createProjectModal();

    }

    
    const form = document.getElementById("projectform");
    form.addEventListener('submit', function(){
        const display = document.querySelector(".projectModal");
        display.style.display = "none";
        createProject();
    });
}



window.onclick = function(event) {
    const modal = document.querySelector(".modalBack");
    const display = document.querySelector(".projectModal");
    if (event.target == modal) {
        display.style.display = "none";
    }
}