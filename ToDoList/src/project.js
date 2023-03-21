import { loadNav } from './dom';
import { loadProject } from './dom';

let list = [];

function project(title, desc, due, prior, check){
    this.id = nextId();
    this.title = title;
    this.desc = desc
    this.due = due;
    this.prior = prior;
    this.check = check;
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

function createProject(title, desc, due, prior, check){
    let obj = new project(title, desc, due, prior, check);
    addProject(obj);
}

function addProject(obj){
    refreshProjects();
    list.push(obj);

    localStorage.setItem("Projects", JSON.stringify(list));
    console.log(JSON.parse(localStorage.getItem("Projects")));
}

function refreshProjects(){
    if(JSON.parse(localStorage.getItem("Projects") == null)){
        list = [];
    }
    else{
        list = JSON.parse(localStorage.getItem("Projects"));
        console.log(JSON.parse(localStorage.getItem("Projects")));
    }
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
    loadNav(list);
}


export { createProject };
export { deleteProject };
export { clearProjects };
export { getAllProjects };
export { getProject };