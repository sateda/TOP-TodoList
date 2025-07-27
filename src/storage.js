/**
 * file: storage.js
 * 
 * App stores data in the following arrays
 *  - TOP-todoList.todos
 *  - TOP-todoList.projects
 * 
 */

const storage = (function() {
    // Private variables
    const namespace = "TOP-todoList.";

    // save object todo to storage
    function saveStorage(container, item) {
        const object = namespace + container;
        localStorage.setItem(object, JSON.stringify(item));
    }

    // retrieve object from storage
    function getStorage(container) {
       console.log("get storage" + container);
       const object = namespace + container;
       const todos = JSON.parse(localStorage.getItem(object));
       console.log(todos);
    }

    // Public API
    return { getStorage, saveStorage };
})();

export { storage }