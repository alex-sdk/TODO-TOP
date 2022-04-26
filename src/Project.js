export default function Project() {
          
    function clickAddProject() {
        
        function removeInputElements() {
            projectList.removeChild(input);
            projectList.removeChild(checkmarkBtn);
            projectList.removeChild(deleteBtn);
            addProjectBtn.disabled = false;
        }
        function renderNewProject() {
            const project = document.createElement("div");
            project.classList.add("project");
            project.id = defaultProject.numberOfProjects;

            const projectListBtn = document.createElement("button");
            projectListBtn.classList.add("displayProject");
            projectListBtn.innerText = input.value;
            
            const removeProjectBtn = document.createElement("button");
            removeProjectBtn.classList.add("ha-svg");
            removeProjectBtn.append(trashcanImg);
    
            project.append(projectListBtn);
            project.append(removeProjectBtn)
            projectList.append(project);
            
            removeProjectBtn.addEventListener("click", () => {
                defaultProject.removeProject(project);
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
            renderNewProject()
            removeInputElements()
        });

        deleteBtn.addEventListener("click", () => {
            removeInputElements()
        });
    }
    
    class Project{
        constructor(Title, Tasks, projects) {
            this.Title = Title;
            this.Tasks = Tasks;
            this.projects = projects;
            this.numberOfProjects = projects.length
        }

        addProject = () => {
            
        }
        removeProject = (div) => {

            projectList.removeChild(div);
        }
    }
    const projectList = document.querySelector(".projects");
    const addProjectBtn = document.getElementById("addProject");
    addProjectBtn.addEventListener("click", clickAddProject);
    
    const defaultTitle = "Project";
    const allTasks = [];
    const allProjects = [];
    const defaultProject = new Project(defaultTitle, allTasks, allProjects);
    
};