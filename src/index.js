// src/index.js
import "./styles.css";
import { todoList } from "./todoList.js";
import { projectList } from "./projectList.js";

/**
 * 
 *  Todo: title, description, dueDate, priority, notes
 *  Project: title
 *  DOM logic
 *  App logic
 * 
 */

const todos = todoList.getAllTodos();
console.log(todos);