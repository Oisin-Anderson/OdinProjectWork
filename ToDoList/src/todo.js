import { loadTodosBrief } from './dom';

let list = [];

function todo(pid, title, desc, due, prior, check){
    this.id = nextId();
    this.pid = pid;
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
    refreshTodos();
    if(list.length == 0){
        return 1;
    }
    else{
        return (list[list.length - 1].id) + 1;
    }
}

function createTodo(pid, title, desc, due, prior, check){
    let obj = new todo(pid, title, desc, due, prior, check);
    addTodo(obj);
}

function addTodo(obj){
    refreshTodos();
    list.push(obj);

    localStorage.setItem("Todos", JSON.stringify(list));
    console.log(JSON.parse(localStorage.getItem("Todos")));
}

function refreshTodos(){
    list = JSON.parse(localStorage.getItem("Todos"));
    console.log(JSON.parse(localStorage.getItem("Todos")));
}

function deleteTodo(id){
    refreshTodos();
    for(let i=0; i<list.length; i++){
        if(list[i].id == id){
            let spare = list.pop(i);
        }
    }
    if((list.length == 1) && (list[0].id == id)){
        list = [];
    }
    localStorage.setItem("Todos", JSON.stringify(list));

}

function clearTodos(){
    refreshTodos();
    list = [];
    localStorage.setItem("Todos", JSON.stringify(list));
}

function getTodo(id){
    refreshTodos();
    for(let i=0; i<list.length; i++){
        if(list[i].id == id){
            let obj = list[i];
            console.log(obj);
        }
    }
}

function getTodosBrief(id){
    let brief = [];
    refreshTodos();
    for(let i=0; i<list.length; i++){
        if(list[i].pid == id){
            brief.push(list[i]);
        }
    }
    console.log(brief);
    loadTodosBrief(brief);

}


export { createTodo };
export { deleteTodo };
export { clearTodos };
export { getTodo };
export { getTodosBrief };