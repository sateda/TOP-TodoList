// projectList.js
import { storage } from "./storage";
import { createProject } from "./createProject";

const projectList = (function() {
    // load data
    const projects = storage.getStorage("projects") || populateOnFirstVisit();

    // populates projects array and saves it when this is the first visit
    function populateOnFirstVisit() {
        const defaultProjects = [
        createProject("default", "default"),
        createProject("Groceries", "All todo's which has to do with getting groceries"),
        createProject("Medical", "Medical related todo's")
    ];

        storage.saveStorage("projects", defaultProjects);
        return defaultProjects;
    }

    // return JSON
    function getProjects() {
        return projects;
    }

    // update projects
    function updateProjects(newProjects) {
        projects.length = 0;
        projects.push(...newProjects) // update memory
        storage.saveStorage("projects",projects); // update storage
        return projects;
    }

    // add project
    function addProject(title, description) {
        const project = createProject(title, description);
        projects.push(project);
        updateProjects(projects);
    }

    // edit project
    function editProject(uuid, title, description) {
        const projectIndex = projects.findIndex((project) => project.uuid === uuid);
        const newProjectUuid = projects[projectIndex].uuid;

        const newProject = createProject(title, description);
        newProject.uuid = newProjectUuid;
                
        projects[projectIndex] = newProject;
        updateProjects(projects);
    }

    // remove project
    function removeProject(uuid) {
        const newProjects = projects.filter((project) => project.uuid !== uuid);
        updateProjects(newProjects);
    }
 
    return { getProjects, updateProjects, addProject, editProject, removeProject};
})();