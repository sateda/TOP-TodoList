// todoList.js
import { storage } from "./storage";
import { createTodo } from "./createTodo";

const todoList = (function() {
    // load data
    const todos = storage.getStorage("todos") || populateOnFirstVisit();

    // populates todos array and saves it when this is the first visit
    function populateOnFirstVisit() {
        const defaultTodos = [
        createTodo("Buy groceries", "Milk, eggs, bread", "2025-08-01", "High", "Use loyalty card"),
        createTodo("Call dentist", "Book an appointment", "2025-08-03", "Medium", "Check insurance")
    ];

        storage.saveStorage("todos", defaultTodos);
        return defaultTodos;
    }

    // return JSON
    function getTodos() {
        return todos;
    }

    // update todos
    function updateTodos(newTodos) {
        todos.length = 0;
        todos.push(...newTodos) // update memory
        storage.saveStorage("todos",todos); // update storage
        return todos;
    }

    // add todo
    function addTodo(title, description, dueDate, priority, notes) {
        const todo = createTodo(title, description, dueDate, priority, notes);
        todos.push(todo);
        updateTodos(todos);
    }

    // edit todo
    function editTodo(uuid, projectID, title, description, dueDate, priority, notes) {
        const todoIndex = todos.findIndex((todo) => todo.uuid === uuid);
        const completed = todos[todoIndex].completed;
        const newTodoUuid = todos[todoIndex].uuid;
        const oldTodo = todos[todoIndex];

        const newTodo = createTodo(title, description, dueDate, priority, notes);
        newTodo.uuid = newTodoUuid;
        newTodo.projectID = projectID;
        newTodo.completed = completed;
        
        todos[todoIndex] = newTodo;
        updateTodos(todos);
    }

    // remove todo
    function removeTodo(uuid) {
        const newTodos = todos.filter((todo) => todo.uuid !== uuid);
        updateTodos(newTodos);
    }
 
    return { getTodos, updateTodos, addTodo, editTodo, removeTodo};

})();

export { todoList }