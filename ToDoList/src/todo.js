let list = [];

function todo(id, pid, title, desc, due, prior, check){
    this.id = id;
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

function createTodo(id, pid, title, desc, due, prior, check){
    let obj = new todo(id, pid, title, desc, due, prior, check);
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


export { createTodo };
export { deleteTodo };
export { clearTodos };
export { getTodo };