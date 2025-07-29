/**
 * file: storage.js
 * 
 * App stores data in the following objects
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
       const object = namespace + container;
       const items = JSON.parse(localStorage.getItem(object));
       return items;
    }

    // Public API
    return { getStorage, saveStorage };
})();

export { storage }