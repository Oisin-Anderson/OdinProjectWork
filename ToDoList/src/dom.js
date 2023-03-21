import { getProject } from "./project";
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
    
    content.appendChild(nav);
    content.appendChild(main);
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

export { loadNav };
export { loadProject };
export { loadTodosBrief };