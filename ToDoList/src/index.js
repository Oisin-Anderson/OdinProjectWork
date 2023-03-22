import { createTodo } from './todo';
import { deleteTodo } from './todo';
import { clearTodos } from './todo';
import { getTodo } from './todo';
import { createProject, getAllProjects, getProject } from './project';
import { createProjectModal, createContent } from './dom';


window.onload = function(){
    //deleteTodo(1);
    //clearTodos();
    //createTodo(1, "Tinder", "Tinder App", "06/07/19", 4, false);
    //createProject("Plenty Of Fish", "Tinder App", "06/07/19", 4, false);
    //getTodo(1);

    createContent();

    if(localStorage.getItem("Projects") == null){
        console.log("Default Project")
    }else{
        createProjectModal();
        getAllProjects();

    }

    const form = document.querySelector('#projectform');
    form.addEventListener('submit', (event) => handleSubmit(form))

}



window.onclick = function(event) {
    const modal = document.querySelector(".modalBack");
    const display = document.querySelector(".projectModal");
    if (event.target == modal) {
        display.style.display = "none";
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }
}

const handleSubmit = (form) => {
    event.preventDefault()
    const display = document.querySelector(".projectModal");
    display.style.display = "none";
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    createProject();
    form.reset();
}