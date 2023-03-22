import { loadNav } from './dom';
import { loadProject } from './dom';

let list = [];

function project(title, desc, due, prior){
    this.id = nextId();
    this.title = title;
    this.desc = desc
    this.due = due;
    this.prior = prior;
    this.check = false;
    this.print = function(){
        console.log(title);
    }
}

function nextId(){
    refreshProjects();
    console.log(list.length)
    if(list.length == 0){
        return 1;
    }
    else{
        return (list[list.length - 1].id) + 1;
    }
}

function createProject(){
    const form = document.getElementById("projectform");
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    let obj = Object.fromEntries(formData);

    const entry = new project();
    entry.title = obj.Title;
    entry.desc = obj.Description;
    entry.due = obj.Due;
    entry.prior = obj.Priority;
    
    addProject(entry);
}

function addProject(obj){
    refreshProjects();
    list.push(obj);

    localStorage.setItem("Projects", JSON.stringify(list));
    console.log(JSON.parse(localStorage.getItem("Projects")));
    refreshProjects();
}

function refreshProjects(){
    if(JSON.parse(localStorage.getItem("Projects") == null)){
        list = [];
    }
    else{
        list = JSON.parse(localStorage.getItem("Projects"));
        console.log(JSON.parse(localStorage.getItem("Projects")));
    }
    loadNav(list);
}

function deleteProject(id){
    refreshProjects();
    for(let i=0; i<list.length; i++){
        if(list[i].id == id){
            let spare = list.pop(i);
        }
    }
    if((list.length == 1) && (list[0].id == id)){
        list = [];
    }
    localStorage.setItem("Projects", JSON.stringify(list));

}

function clearProjects(){
    refreshProjects();
    list = [];
    localStorage.setItem("Projects", JSON.stringify(list));
}

function getProject(id){
    refreshProjects();
    for(let i=0; i<list.length; i++){
        if(list[i].id == id){
            let obj = list[i];
            console.log(obj);
            loadProject(obj);
        }
    }
}

function getAllProjects(){
    refreshProjects();
}


export { createProject };
export { deleteProject };
export { clearProjects };
export { getAllProjects };
export { getProject };