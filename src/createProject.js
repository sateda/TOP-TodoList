// createProject.js
function createProject (title, description) {
    const uuid = self.crypto.randomUUID();

    return {
        uuid : uuid,
        title,
        description,
    };
}

export { createProject };

