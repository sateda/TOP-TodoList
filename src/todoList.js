// todoList.js
import { storage } from "./storage";
import { createTodo } from "./createTodo";

const todoList = (function() {
    // Retrieve data from storage
    const todos = storage.getStorage("todos");
    const projects = storage.getStorage("projects");

    // creates some todo as test
    const todo1 = createTodo("test groceries", "Pick up milk, eggs, and bread from the store.","2025-07-28","High","Use discount card at checkout");
    const todo2 = createTodo("Finish project report","Complete and submit the quarterly project report to the manager.","2025-07-30","Medium","Include updated sales figures and charts");

    const allTodos = {todo1, todo2};
    storage.saveStorage("projects",allTodos);
})();