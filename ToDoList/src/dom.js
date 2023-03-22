import { createProject, getProject } from "./project";
import { getTodo, getTodosBrief } from "./todo";

let $ = function(id){
    return document.getElementById(id);
}

function loadNav(list){
    let content = document.querySelector("#content");
    let nav = document.createElement('div');
    let main = document.createElement('div');
    nav.classList.add("nav");
    main.classList.add("main");
    let nheading = document.createElement('h1');
    nheading.textContent = "Projects";
    nav.appendChild(nheading);
    for(let i=0; i<list.length; i++){
        let project = document.createElement('div');
        project.textContent = list[i].title;
        project.value = list[i].id;
        project.onclick = function(){getProject(this.value)};
        nav.appendChild(project);
    }

    let create = document.createElement('div');
    create.classList.add("createProject");
    create.onclick = function(){loadProjectModal()};
    create.textContent = "New Project";
    nav.appendChild(create);
    
    content.appendChild(nav);
    content.appendChild(main);
    createProjectModal();
}

function loadProject(obj){
    let main = document.querySelector(".main");
    let title = document.createElement('div');
    let desc = document.createElement('div');
    let due = document.createElement('div');
    let prior = document.createElement('div');
    let check = document.createElement('div');
    title.textContent = obj.title;
    desc.textContent = obj.desc;
    due.textContent = obj.due;
    prior.textContent = obj.prior;
    check.textContent = obj.check;

    main.appendChild(title);
    main.appendChild(desc);
    main.appendChild(due);
    main.appendChild(prior);
    main.appendChild(check);

    getTodosBrief(obj.id);

}

function loadTodosBrief(list){
    let main = document.querySelector(".main");
    for(let i=0; i<list.length; i++){
        let todos = document.createElement('div');
        todos.textContent = list[i].title;
        todos.value = list[i].id;
        todos.onclick = function(){getTodo(this.value)};
        console.log(todos);
        main.appendChild(todos);
    }
}

function createProjectModal(){
    let main = document.querySelector(".main");
    let modal = document.createElement('div');
    modal.classList.add("projectModal")
    let back = document.createElement('div');
    back.classList.add("modalBack");

    let form = document.createElement('form');
    form.onsubmit = function(){createProject(FormData)};
    let content = document.createElement('div');
    content.classList.add("projMContent");

    let inputs = ["title", "desc", "due", "prior"];
    for(let i=0; i<inputs.length; i++){
        let input = document.createElement('input');
        input.placeholder = inputs[i];
        input.name = inputs[i];
        input.setAttribute("type", "text");
        content.appendChild(input);
    }
    let submit = document.createElement('button');
    submit.type = "submit";
    content.appendChild(submit);
    form.appendChild(content);



    back.appendChild(form);
    modal.appendChild(back);
    main.appendChild(modal)
}

function loadProjectModal(){
    const modal = document.querySelector(".projectModal");
    modal.style.display = "block";
}

export { loadNav };
export { loadProject };
export { loadTodosBrief };