// todo.js
function createTodo (title, description, dueDate, priority, notes) {
    const uuid = self.crypto.randomUUID();

    return {
        uuid : uuid,
        title,
        description,
        dueDate,
        priority,
        notes,
        completed: false,
        toggleCompleted() {
            this.completed = !this.completed;
        },
    };
}

export { createTodo };

