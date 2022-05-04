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
/* harmony export */   "projectEventListeners": () => (/* binding */ projectEventListeners)
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

function projectEventListeners() {    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZ0Q7QUFDQTtBQUNxQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG1EQUFXO0FBQ25CLFFBQVEsa0RBQVM7QUFDakIsUUFBUSwrREFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFrQjtBQUN0QztBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWtCO0FBQzlCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElxRDtBQUNyRCxDQUFxQztBQUNPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBNEI7QUFDcEMsb0JBQW9CLHFEQUFjO0FBQ2xDLFFBQVEsbURBQVU7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDL0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjcmVhdGVNb2RhbCwgb3Blbk1vZGFsLCBjbG9zZU1vZGFsfVxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlRGl2Q29udGFpbmVycyhuYW1lLCByZXF1aXJlZCwgbWF4bGVuLCBtaW5sZW4sIHR5cGUpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmIChuYW1lID09PSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYWJlbC5odG1sRm9yID0gbmFtZTtcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgICAgIGlucHV0LmlkID0gbmFtZTtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gbWF4bGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gbWlubGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uaWQgPSBcImNsb3NlLW1vZGFsXCI7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKVxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gICAgXG4gICAgY29uc3QgZGl2MSA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJUYXNrXCIsIHRydWUsIDI1LCAxLCBcInRleHRcIik7XG4gICAgY29uc3QgZGl2MiA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEYXRlXCIsIHRydWUsIDAsIDAsIFwiZGF0ZVwiKTtcbiAgICBjb25zdCBkaXYzID0gY3JlYXRlRGl2Q29udGFpbmVycyhcIkRlc2NyaXB0aW9uXCIsIGZhbHNlLCAzMDApO1xuXG4gICAgZm9ybS5hcHBlbmQoY2xvc2VCdXR0b24sIGRpdjEsIGRpdjIsIGRpdjMsIGFkZEJ1dHRvbik7XG4gICAgbW9kYWwuYXBwZW5kKGZvcm0pO1xufVxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkZWxldGVNb2RhbEVsZW1lbnRzKClcbn1cbmZ1bmN0aW9uIGRlbGV0ZU1vZGFsRWxlbWVudHMoKSB7XG4gICAgbW9kYWwucmVwbGFjZUNoaWxkcmVuKClcbn1cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7IiwiZXhwb3J0IHsgcHJvamVjdEV2ZW50TGlzdGVuZXJzLCBkZWZhdWx0UHJvamVjdH07XG5pbXBvcnQgeyBjcmVhdGVNb2RhbCwgb3Blbk1vZGFsfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0VsZW1lbnRzLCBjcmVhdGVOZXdUYXNrRnJvbU1vZGFsIH0gZnJvbSBcIi4vdGFza3NcIjtcbiAgICBcbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IoVGFza3MsIHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMuVGFza3MgPSBUYXNrcztcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGNyZWF0ZU1vZGFsKClcbiAgICAgICAgb3Blbk1vZGFsKClcbiAgICAgICAgY3JlYXRlTmV3VGFza0Zyb21Nb2RhbCgpXG4gICAgfVxuICAgIGFkZFRhc2tUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0aGlzLlRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIGFkZFByb2plY3QgPSAoVGl0bGUpID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKFRpdGxlKTtcbiAgICB9XG4gICAgcmVtb3ZlUHJvamVjdCA9IChkaXYpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKGRpdi5pbm5lclRleHQpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUlucHV0RWxlbWVudHMoKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoY2hlY2ttYXJrQnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5UHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdExpc3RCdG4uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmQocHJvamVjdExpc3RCdG4sIHJlbW92ZVByb2plY3RCdG4pO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdCk7XG5cbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdG5hbWVcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBwcm9qZWN0TGlzdEJ0bi5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NDb250YWluZXJcIik7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKVxuXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5UYXNrcy5mb3JFYWNoKHRhc2tPYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrT2JqZWN0LnByb2plY3QgPT0gcHJvamVjdE5hbWUuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50cyh0YXNrT2JqZWN0KTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjaGVja21hcmtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgdHJhc2hjYW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgY2hlY2ttYXJrLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jaGVjay5zdmdcIjtcbiAgICB0cmFzaGNhbkltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvdHJhc2gtMi5zdmdcIjtcblxuICAgIGNoZWNrbWFya0J0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgIGNoZWNrbWFya0J0bi5hcHBlbmQoY2hlY2ttYXJrKTtcbiAgICBcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kKHRyYXNoY2FuSW1nKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRQcm9qZWN0XCIpO1xuICAgIFxuICAgIHByb2plY3RMaXN0LmFwcGVuZChpbnB1dCwgY2hlY2ttYXJrQnRuLCBkZWxldGVCdG4pO1xuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY2hlY2ttYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQcm9qZWN0IE5hbWUgQ2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVByb2plY3QoKVxuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcbn0gXG5cbmZ1bmN0aW9uIHByb2plY3RFdmVudExpc3RlbmVycygpIHsgICAgXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tBZGRQcm9qZWN0KTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWZhdWx0UHJvamVjdC5jcmVhdGVUYXNrKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzQ29udGFpbmVyXCIpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RuYW1lXCIpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LlRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjcmVhdGVUYXNrRWxlbWVudHModGFzayk7IFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuY29uc3QgYWxsVGFza3MgPSBbXTtcbmNvbnN0IGFsbFByb2plY3RzID0gW107XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KGFsbFRhc2tzLCBhbGxQcm9qZWN0cyk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25TdHlsaW5nXCIpO1xuXG5cbi8vcHJvcGVybHkgbWFuYWdlIGRhdGEgb24gZGVsZXRpb25cbi8vdXBkYXRlIGNoZWNrbWFyayBkYXRhXG4vL3N0eWxpbmcgdGFzayBpZiBjaGVja2VkIG9mZlxuLy9zb3J0IGJ5IGRhdGVcbi8vZWRpdCB0YXNrIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4vL2RlbGV0ZSB0YXNrIGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4vL2xvY2FsIHN0b3JhZ2UiLCJleHBvcnQgeyBjcmVhdGVUYXNrRWxlbWVudHMsIGNyZWF0ZU5ld1Rhc2tGcm9tTW9kYWwgfVxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCBjaGVja0JveCwgbmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlTmV3VGFza0Zyb21Nb2RhbCgpIHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NDb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXN2Z1wiKTtcblxuICAgIGNvbnN0IGVkaXRTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRTdmcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2VkaXQuc3ZnXCI7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3ZnXCIpO1xuXG4gICAgY29uc3QgZGVsZXRlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkZWxldGVTdmcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3RyYXNoLTIuc3ZnXCI7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgZWRpdEJ1dHRvbi5hcHBlbmQoZWRpdFN2Zyk7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZChkZWxldGVTdmcpO1xuICAgIHRhc2suYXBwZW5kKGNoZWNrYm94LCB0aXRsZSwgZGF0ZSwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrLCBkZXRhaWxzKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7IFxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRhc2tcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXRhaWxzRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bmFtZVwiKS5pbm5lclRleHQ7XG4gICAgICAgIFxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0NvbnRhaW5lcik7XG4gICAgICAgIFxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrVGl0bGU7XG4gICAgICAgIGRhdGUudmFsdWUgPSBkYXRlRGF0YTtcbiAgICAgICAgZGV0YWlscy5pbm5lclRleHQgPSBkZXRhaWxzRGF0YTtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkVGFza1RvTGlzdChuZXcgVGFzayhwcm9qZWN0TmFtZSwgY2hlY2tib3guY2hlY2tlZCwgdGFza1RpdGxlLCBkYXRlRGF0YSwgZGV0YWlsc0RhdGEpKTtcbiAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpXG4gICAgICAgIGNsb3NlTW9kYWwoKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50cyh0YXNrT2JqZWN0KSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBlZGl0U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0U3ZnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9lZGl0LnN2Z1wiO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXN2Z1wiKTtcblxuICAgIGNvbnN0IGRlbGV0ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlU3ZnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy90cmFzaC0yLnN2Z1wiO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGVkaXRCdXR0b24uYXBwZW5kKGVkaXRTdmcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlU3ZnKTtcbiAgICB0YXNrLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRhdGUsIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQodGFzaywgZGV0YWlscyk7XG4gICAgdGFza0xpc3QuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFza09iamVjdC5uYW1lO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrT2JqZWN0LmNoZWNrQm94O1xuICAgIGRhdGUudmFsdWUgPSB0YXNrT2JqZWN0LmRhdGU7XG4gICAgZGV0YWlscy5pbm5lclRleHQgPSB0YXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcHJvamVjdHMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=