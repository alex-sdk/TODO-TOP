/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "createModal": () => (/* binding */ createModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });

function createModal() {
    function createDivContainers(name, required, maxlen, minlen, type) {
        const div = document.createElement("div");
        const label = document.createElement("label");
        let input = document.createElement("input");
        input.type = type;
        if (name === "Description") {
            input = document.createElement("textarea");
        }
        
        label.htmlFor = name;
        label.innerText = name;
        input.name = name;
        input.id = name;
        input.maxLength = maxlen || undefined;
        input.minLength = minlen || undefined;
        if (required) input.required = true;

        div.append(label, input);
        return div;
    }
    const form = document.createElement("form");
    form.classList.add("form");
    
    const closeButton = document.createElement("button");
    closeButton.id = "close-modal";
    closeButton.innerHTML = "&times;"
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    const addButton = document.createElement("button");
    addButton.classList.add("addTask")
    addButton.innerText = "Add Task";
    
    const div1 = createDivContainers("Task", true, 25, 1, "text");
    const div2 = createDivContainers("Date", true, 0, 0, "date");
    const div3 = createDivContainers("Description", false, 300);

    form.append(closeButton, div1, div2, div3, addButton);
    modal.append(form);
}
function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
}
function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    deleteModalElements()
}
function deleteModalElements() {
    modal.replaceChildren()
}
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



    
class Project{
    constructor(Tasks, projects) {
        this.Tasks = Tasks;
        this.projects = projects;
    }

    createTask() {
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.createModal)()
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)()
        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createNewTaskFromModal)()
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
                    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTaskElements)(taskObject);                 
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
        document.querySelector(".projectname").innerText = "";
        defaultProject.Tasks.forEach(task => {
            (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTaskElements)(task); 
        });
    });
}

const allTasks = [];
const allProjects = [];
const defaultProject = new Project(allTasks, allProjects);

const projectList = document.querySelector(".projects");
const addProjectBtn = document.getElementById("addProject");
const addTaskBtn = document.querySelector(".addButtonStyling");


//properly manage data on deletion
//update checkmark data
//styling task if checked off
//sort by date
//edit task button functionality
//delete task button functionality
//local storage

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewTaskFromModal": () => (/* binding */ createNewTaskFromModal),
/* harmony export */   "createTaskElements": () => (/* binding */ createTaskElements)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");

;

class Task {
    constructor(project, checkBox, name, date, description) {
        this.project = project;
        this.checkBox = checkBox;
        this.name = name;
        this.date = date;
        this.description = description;
    }
}
function createNewTaskFromModal() {
    const taskList = document.querySelector(".tasksContainer");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");

    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("div");
    title.classList.add("title");

    const date = document.createElement("input");
    date.classList.add("date");
    date.type = "date";

    const editButton = document.createElement("button");
    editButton.classList.add("fa-svg");

    const editSvg = document.createElement("img");
    editSvg.src = "../src/assets/edit.svg";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-svg");

    const deleteSvg = document.createElement("img");
    deleteSvg.src = "../src/assets/trash-2.svg";

    const details = document.createElement("div");
    details.classList.add("details");

    editButton.append(editSvg);
    deleteButton.append(deleteSvg);
    task.append(checkbox, title, date, editButton, deleteButton);
    taskContainer.append(task, details);

    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => { 
        const taskTitle = document.getElementById("Task").value;
        const dateData = document.getElementById("Date").value;
        const detailsData = document.getElementById("Description").value;
        const projectName = document.querySelector(".projectname").innerText;
        
        taskList.append(taskContainer);
        
        title.innerText = taskTitle;
        date.value = dateData;
        details.innerText = detailsData;
        _projects__WEBPACK_IMPORTED_MODULE_1__.defaultProject.addTaskToList(new Task(projectName, checkbox.checked, taskTitle, dateData, detailsData));
        console.log(_projects__WEBPACK_IMPORTED_MODULE_1__.defaultProject)
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)()
        e.preventDefault()
    });
}
function createTaskElements(taskObject) {
    const taskList = document.querySelector(".tasksContainer");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");

    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("div");
    title.classList.add("title");

    const date = document.createElement("input");
    date.classList.add("date");
    date.type = "date";

    const editButton = document.createElement("button");
    editButton.classList.add("fa-svg");

    const editSvg = document.createElement("img");
    editSvg.src = "../src/assets/edit.svg";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-svg");

    const deleteSvg = document.createElement("img");
    deleteSvg.src = "../src/assets/trash-2.svg";

    const details = document.createElement("div");
    details.classList.add("details");

    editButton.append(editSvg);
    deleteButton.append(deleteSvg);
    task.append(checkbox, title, date, editButton, deleteButton);
    taskContainer.append(task, details);
    taskList.append(taskContainer);

    title.innerText = taskObject.name;
    checkbox.checked = taskObject.checkBox;
    date.value = taskObject.date;
    details.innerText = taskObject.description;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projects.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjcmVhdGVNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsfVxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlRGl2Q29udGFpbmVycyhuYW1lLCByZXF1aXJlZCwgbWF4bGVuLCBtaW5sZW4sIHR5cGUpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmIChuYW1lID09PSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYWJlbC5odG1sRm9yID0gbmFtZTtcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgICAgIGlucHV0LmlkID0gbmFtZTtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gbWF4bGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gbWlubGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uaWQgPSBcImNsb3NlLW1vZGFsXCI7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKVxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gICAgXG4gICAgY29uc3QgZGl2MSA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJUYXNrXCIsIHRydWUsIDI1LCAxLCBcInRleHRcIik7XG4gICAgY29uc3QgZGl2MiA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEYXRlXCIsIHRydWUsIDAsIDAsIFwiZGF0ZVwiKTtcbiAgICBjb25zdCBkaXYzID0gY3JlYXRlRGl2Q29udGFpbmVycyhcIkRlc2NyaXB0aW9uXCIsIGZhbHNlLCAzMDApO1xuXG4gICAgZm9ybS5hcHBlbmQoY2xvc2VCdXR0b24sIGRpdjEsIGRpdjIsIGRpdjMsIGFkZEJ1dHRvbik7XG4gICAgbW9kYWwuYXBwZW5kKGZvcm0pO1xufVxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkZWxldGVNb2RhbEVsZW1lbnRzKClcbn1cbmZ1bmN0aW9uIGRlbGV0ZU1vZGFsRWxlbWVudHMoKSB7XG4gICAgbW9kYWwucmVwbGFjZUNoaWxkcmVuKClcbn1cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7IiwiZXhwb3J0IHsgcHJvamVjdHMsIGRlZmF1bHRQcm9qZWN0fTtcbmltcG9ydCB7IGNyZWF0ZU1vZGFsLCBvcGVuTW9kYWx9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRWxlbWVudHMsIGNyZWF0ZU5ld1Rhc2tGcm9tTW9kYWwgfSBmcm9tIFwiLi90YXNrc1wiO1xuICAgIFxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihUYXNrcywgcHJvamVjdHMpIHtcbiAgICAgICAgdGhpcy5UYXNrcyA9IFRhc2tzO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgY3JlYXRlVGFzaygpIHtcbiAgICAgICAgY3JlYXRlTW9kYWwoKVxuICAgICAgICBvcGVuTW9kYWwoKVxuICAgICAgICBjcmVhdGVOZXdUYXNrRnJvbU1vZGFsKClcbiAgICB9XG4gICAgYWRkVGFza1RvTGlzdCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRoaXMuVGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgYWRkUHJvamVjdCA9IChUaXRsZSkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goVGl0bGUpO1xuICAgIH1cbiAgICByZW1vdmVQcm9qZWN0ID0gKGRpdikgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YoZGl2LmlubmVyVGV4dCkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGlja0FkZFByb2plY3QoKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5wdXRFbGVtZW50cygpIHtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoaW5wdXQpO1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChjaGVja21hcmtCdG4pO1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdExpc3RCdG4uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlQcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdEJ0bi5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uYXBwZW5kKHRyYXNoY2FuSW1nKTtcblxuICAgICAgICBwcm9qZWN0LmFwcGVuZChwcm9qZWN0TGlzdEJ0biwgcmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0KTtcblxuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRQcm9qZWN0KHByb2plY3QuaW5uZXJUZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvamVjdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bmFtZVwiKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3RMaXN0QnRuLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXG5cbiAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0LlRhc2tzLmZvckVhY2godGFza09iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tPYmplY3QucHJvamVjdCA9PSBwcm9qZWN0TmFtZS5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzKHRhc2tPYmplY3QpOyAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNoZWNrbWFya0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCB0cmFzaGNhbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBjaGVja21hcmsuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2NoZWNrLnN2Z1wiO1xuICAgIHRyYXNoY2FuSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy90cmFzaC0yLnN2Z1wiO1xuXG4gICAgY2hlY2ttYXJrQnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgY2hlY2ttYXJrQnRuLmFwcGVuZChjaGVja21hcmspO1xuICAgIFxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmQodHJhc2hjYW5JbWcpO1xuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFByb2plY3RcIik7XG4gICAgXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGlucHV0LCBjaGVja21hcmtCdG4sIGRlbGV0ZUJ0bik7XG4gICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjaGVja21hcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIlByb2plY3QgTmFtZSBDYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlUHJvamVjdCgpXG4gICAgICAgIHJlbW92ZUlucHV0RWxlbWVudHMoKVxuICAgIH0pO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUlucHV0RWxlbWVudHMoKVxuICAgIH0pO1xufSBcblxuZnVuY3Rpb24gcHJvamVjdHMoKSB7ICAgIFxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQWRkUHJvamVjdCk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVmYXVsdFByb2plY3QuY3JlYXRlVGFzayk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICAgICAgdGFza3NDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bmFtZVwiKS5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5UYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzKHRhc2spOyBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGFsbFRhc2tzID0gW107XG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChhbGxUYXNrcywgYWxsUHJvamVjdHMpO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnV0dG9uU3R5bGluZ1wiKTtcblxuXG4vL3Byb3Blcmx5IG1hbmFnZSBkYXRhIG9uIGRlbGV0aW9uXG4vL3VwZGF0ZSBjaGVja21hcmsgZGF0YVxuLy9zdHlsaW5nIHRhc2sgaWYgY2hlY2tlZCBvZmZcbi8vc29ydCBieSBkYXRlXG4vL2VkaXQgdGFzayBidXR0b24gZnVuY3Rpb25hbGl0eVxuLy9kZWxldGUgdGFzayBidXR0b24gZnVuY3Rpb25hbGl0eVxuLy9sb2NhbCBzdG9yYWdlIiwiZXhwb3J0IHsgY3JlYXRlVGFza0VsZW1lbnRzLCBjcmVhdGVOZXdUYXNrRnJvbU1vZGFsIH1cbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgZGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgY2hlY2tCb3gsIG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY2hlY2tCb3ggPSBjaGVja0JveDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tGcm9tTW9kYWwoKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBlZGl0U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0U3ZnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9lZGl0LnN2Z1wiO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXN2Z1wiKTtcblxuICAgIGNvbnN0IGRlbGV0ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlU3ZnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy90cmFzaC0yLnN2Z1wiO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGVkaXRCdXR0b24uYXBwZW5kKGVkaXRTdmcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlU3ZnKTtcbiAgICB0YXNrLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRhdGUsIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQodGFzaywgZGV0YWlscyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUYXNrXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdG5hbWVcIikuaW5uZXJUZXh0O1xuICAgICAgICBcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFza1RpdGxlO1xuICAgICAgICBkYXRlLnZhbHVlID0gZGF0ZURhdGE7XG4gICAgICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gZGV0YWlsc0RhdGE7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRhc2tUb0xpc3QobmV3IFRhc2socHJvamVjdE5hbWUsIGNoZWNrYm94LmNoZWNrZWQsIHRhc2tUaXRsZSwgZGF0ZURhdGEsIGRldGFpbHNEYXRhKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KVxuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudHModGFza09iamVjdCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3ZnXCIpO1xuXG4gICAgY29uc3QgZWRpdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdFN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvZWRpdC5zdmdcIjtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvdHJhc2gtMi5zdmdcIjtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBlZGl0QnV0dG9uLmFwcGVuZChlZGl0U3ZnKTtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kKGRlbGV0ZVN2Zyk7XG4gICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIHRpdGxlLCBkYXRlLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2ssIGRldGFpbHMpO1xuICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2tPYmplY3QubmFtZTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFza09iamVjdC5jaGVja0JveDtcbiAgICBkYXRlLnZhbHVlID0gdGFza09iamVjdC5kYXRlO1xuICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gdGFza09iamVjdC5kZXNjcmlwdGlvbjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Byb2plY3RzLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9