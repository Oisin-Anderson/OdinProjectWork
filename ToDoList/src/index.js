import { createTodo } from './todo';
import { deleteTodo } from './todo';
import { clearTodos } from './todo';
import { getTodo } from './todo';


window.onload = function(){
    deleteTodo(1);
    //clearTodos();
    createTodo(1, 1, "Tinder", "Tinder App", "06/07/19", 4, false);
    //getTodo(1);
}