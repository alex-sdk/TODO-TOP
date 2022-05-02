export { projects, defaultProject };
import { createModal, openModal } from "./modal";
import { createTaskElements } from "./tasks";
    
function clickAddProject() {
    
    function removeInputElements() {
        projectList.removeChild(input);
        projectList.removeChild(checkmarkBtn);
        projectList.removeChild(deleteBtn);
        addProjectBtn.disabled = false;
    }
    function createProject() {
        const project = document.createElement("div");
        project.classList.add("project");

        const projectListBtn = document.createElement("button");
        projectListBtn.classList.add("displayProject");
        projectListBtn.innerText = input.value;
        
        const removeProjectBtn = document.createElement("button");
        removeProjectBtn.classList.add("ha-svg");
        removeProjectBtn.append(trashcanImg);

        project.append(projectListBtn);
        project.append(removeProjectBtn)
        projectList.append(project);

        defaultProject.addProject(project.innerText);
        console.log(defaultProject.projects);

        removeProjectBtn.addEventListener("click", () => {
            defaultProject.removeProject(project);
            console.log(defaultProject.projects)
        });
    }

    const input = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const checkmarkBtn = document.createElement("button");
    const checkmark = document.createElement("img");
    const trashcanImg = document.createElement("img");

    checkmark.src = "../src/assets/check.svg";
    trashcanImg.src = "../src/assets/trash-2.svg";

    checkmarkBtn.classList.add("ha-svg");
    checkmarkBtn.append(checkmark);
    
    deleteBtn.classList.add("ha-svg");
    deleteBtn.append(trashcanImg);

    input.setAttribute('type', "text");
    input.classList.add("inputProject");
    
    projectList.append(input);
    projectList.append(checkmarkBtn);
    projectList.append(deleteBtn);
    addProjectBtn.disabled = true;

    checkmarkBtn.addEventListener("click", () => {
        if (input.value == "") {
            return alert("Project Name Cannot be empty");
        }
        createProject()
        removeInputElements()
    });

    deleteBtn.addEventListener("click", () => {
        removeInputElements()
    });
} 

function projects() {    
    addProjectBtn.addEventListener("click", clickAddProject);
    addTaskBtn.addEventListener("click", defaultProject.createTask);
}
class Project{
    constructor(Title, Tasks, projects) {
        this.Title = Title;
        this.Tasks = Tasks;
        this.projects = projects;
        this.numberOfProjects = projects.length
    }

    createTask() {
        createModal()
        openModal()
        createTaskElements()
    }

    addProject = (Title) => {
        this.projects.push(Title);
    }
    removeProject = (div) => {
        projectList.removeChild(div);
        this.projects.splice(this.projects.indexOf(div.innerText))
    }

}
class Task {
    constructor(project, checkBox, name, date, description) {
        this.project = project;
        this.checkBox = checkBox;
        this.name = name;
        this.date = date;
        this.description = description;
    }
}
const defaultTitle = "Project";
const allTasks = [];
const allProjects = [];
const defaultProject = new Project(defaultTitle, allTasks, allProjects);

const projectList = document.querySelector(".projects");
const addProjectBtn = document.getElementById("addProject");
const addTaskBtn = document.querySelector(".addButtonStyling");


//on submit grab data from modal element
//create task object
//push task object to according project list
//side bar project buttons on click display project task lists sorted by date
//home button functionality
//edit task button functionality
//delete task button functionality
//local storage