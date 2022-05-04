export { projects, defaultProject};
import { createModal, openModal} from "./modal";
import { createTaskElements, createNewTaskFromModal } from "./tasks";
    
class Project{
    constructor(Title, Tasks, projects) {
        this.Title = Title;
        this.Tasks = Tasks;
        this.projects = projects;
    }

    createTask() {
        createModal()
        openModal()
        createNewTaskFromModal()
    }
    addTaskToList = (task) => {
        this.Tasks.push(task);
    }
    addProject = (Title) => {
        this.projects.push(Title);
    }
    removeProject = (div) => {
        projectList.removeChild(div);
        this.projects.splice(this.projects.indexOf(div.innerText))
    }
}

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

        project.append(projectListBtn, removeProjectBtn);
        projectList.append(project);

        defaultProject.addProject(project.innerText);
        console.log(defaultProject);

        removeProjectBtn.addEventListener("click", () => {
            defaultProject.removeProject(project);
            console.log(defaultProject)
        });

        projectListBtn.addEventListener("click", () => {
            const projectName = document.querySelector(".projectname");
            projectName.innerText = projectListBtn.innerText;
            const tasksContainer = document.querySelector(".tasksContainer");
            tasksContainer.replaceChildren()

            defaultProject.Tasks.forEach(taskObject => {
                if (taskObject.project == projectName.innerText) {
                    createTaskElements(taskObject);                 
                }
            }); 
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
    
    projectList.append(input, checkmarkBtn, deleteBtn);
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
    document.querySelector(".home").addEventListener("click", () => {
        const tasksContainer = document.querySelector(".tasksContainer");
        tasksContainer.replaceChildren()
        document.querySelector(".projectname").innerText = "Projects";
        defaultProject.Tasks.forEach(task => {
            createTaskElements(task); 
        });
    });
}

const defaultTitle = "Project";
const allTasks = [];
const allProjects = [];
const defaultProject = new Project(defaultTitle, allTasks, allProjects);

const projectList = document.querySelector(".projects");
const addProjectBtn = document.getElementById("addProject");
const addTaskBtn = document.querySelector(".addButtonStyling");



//push task object to according project list
//side bar project buttons on click display project task lists sorted by date
//home button functionality
//edit task button functionality
//delete task button functionality
//local storage