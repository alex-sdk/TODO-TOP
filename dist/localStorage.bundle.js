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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


function setData() {
    localStorage.setItem("defaultProject", JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.defaultProject));
}
function restore() {
    
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUM7QUFDQSwwREFBMEQscURBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y3JlYXRlTW9kYWwsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbH1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdkNvbnRhaW5lcnMobmFtZSwgcmVxdWlyZWQsIG1heGxlbiwgbWlubGVuLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJEZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm1heExlbmd0aCA9IG1heGxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IG1pbmxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyZXF1aXJlZCkgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGRpdi5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gXCJjbG9zZS1tb2RhbFwiO1xuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIilcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICAgIFxuICAgIGNvbnN0IGRpdjEgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiVGFza1wiLCB0cnVlLCAyNSwgMSwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGRpdjIgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiRGF0ZVwiLCB0cnVlLCAwLCAwLCBcImRhdGVcIik7XG4gICAgY29uc3QgZGl2MyA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEZXNjcmlwdGlvblwiLCBmYWxzZSwgMzAwKTtcblxuICAgIGZvcm0uYXBwZW5kKGNsb3NlQnV0dG9uLCBkaXYxLCBkaXYyLCBkaXYzLCBhZGRCdXR0b24pO1xuICAgIG1vZGFsLmFwcGVuZChmb3JtKTtcbn1cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGVsZXRlTW9kYWxFbGVtZW50cygpXG59XG5mdW5jdGlvbiBkZWxldGVNb2RhbEVsZW1lbnRzKCkge1xuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbigpXG59XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpOyIsImV4cG9ydCB7IHByb2plY3RzLCBkZWZhdWx0UHJvamVjdH07XG5pbXBvcnQgeyBjcmVhdGVNb2RhbCwgb3Blbk1vZGFsfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFza0VsZW1lbnRzLCBjcmVhdGVOZXdUYXNrRnJvbU1vZGFsIH0gZnJvbSBcIi4vdGFza3NcIjtcbiAgICBcbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IoVGFza3MsIHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMuVGFza3MgPSBUYXNrcztcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGNyZWF0ZU1vZGFsKClcbiAgICAgICAgb3Blbk1vZGFsKClcbiAgICAgICAgY3JlYXRlTmV3VGFza0Zyb21Nb2RhbCgpXG4gICAgfVxuICAgIGFkZFRhc2tUb0xpc3QgPSAodGFzaykgPT4ge1xuICAgICAgICB0aGlzLlRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIGFkZFByb2plY3QgPSAoVGl0bGUpID0+IHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKFRpdGxlKTtcbiAgICB9XG4gICAgcmVtb3ZlUHJvamVjdCA9IChkaXYpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKGRpdi5pbm5lclRleHQpKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUlucHV0RWxlbWVudHMoKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoY2hlY2ttYXJrQnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5UHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdExpc3RCdG4uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmQocHJvamVjdExpc3RCdG4sIHJlbW92ZVByb2plY3RCdG4pO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdCk7XG5cbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdG5hbWVcIik7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSBwcm9qZWN0TGlzdEJ0bi5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NDb250YWluZXJcIik7XG4gICAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKVxuXG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5UYXNrcy5mb3JFYWNoKHRhc2tPYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrT2JqZWN0LnByb2plY3QgPT0gcHJvamVjdE5hbWUuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50cyh0YXNrT2JqZWN0KTsgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjaGVja21hcmtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgdHJhc2hjYW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgY2hlY2ttYXJrLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jaGVjay5zdmdcIjtcbiAgICB0cmFzaGNhbkltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvdHJhc2gtMi5zdmdcIjtcblxuICAgIGNoZWNrbWFya0J0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgIGNoZWNrbWFya0J0bi5hcHBlbmQoY2hlY2ttYXJrKTtcbiAgICBcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kKHRyYXNoY2FuSW1nKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRQcm9qZWN0XCIpO1xuICAgIFxuICAgIHByb2plY3RMaXN0LmFwcGVuZChpbnB1dCwgY2hlY2ttYXJrQnRuLCBkZWxldGVCdG4pO1xuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY2hlY2ttYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQcm9qZWN0IE5hbWUgQ2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVByb2plY3QoKVxuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcbn0gXG5cbmZ1bmN0aW9uIHByb2plY3RzKCkgeyAgICBcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFByb2plY3QpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlZmF1bHRQcm9qZWN0LmNyZWF0ZVRhc2spO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NDb250YWluZXJcIik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdG5hbWVcIikuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgZGVmYXVsdFByb2plY3QuVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50cyh0YXNrKTsgXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBhbGxUYXNrcyA9IFtdO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoYWxsVGFza3MsIGFsbFByb2plY3RzKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFwiKTtcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZEJ1dHRvblN0eWxpbmdcIik7XG5cblxuLy9wcm9wZXJseSBtYW5hZ2UgZGF0YSBvbiBkZWxldGlvblxuLy91cGRhdGUgY2hlY2ttYXJrIGRhdGFcbi8vc3R5bGluZyB0YXNrIGlmIGNoZWNrZWQgb2ZmXG4vL3NvcnQgYnkgZGF0ZVxuLy9lZGl0IHRhc2sgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbi8vZGVsZXRlIHRhc2sgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbi8vbG9jYWwgc3RvcmFnZSIsImV4cG9ydCB7IGNyZWF0ZVRhc2tFbGVtZW50cywgY3JlYXRlTmV3VGFza0Zyb21Nb2RhbCB9XG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIGNoZWNrQm94LCBuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNoZWNrQm94ID0gY2hlY2tCb3g7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrRnJvbU1vZGFsKCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3ZnXCIpO1xuXG4gICAgY29uc3QgZWRpdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdFN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvZWRpdC5zdmdcIjtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvdHJhc2gtMi5zdmdcIjtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBlZGl0QnV0dG9uLmFwcGVuZChlZGl0U3ZnKTtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kKGRlbGV0ZVN2Zyk7XG4gICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIHRpdGxlLCBkYXRlLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2ssIGRldGFpbHMpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHsgXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGFza1wiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRldGFpbHNEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RuYW1lXCIpLmlubmVyVGV4dDtcbiAgICAgICAgXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2tUaXRsZTtcbiAgICAgICAgZGF0ZS52YWx1ZSA9IGRhdGVEYXRhO1xuICAgICAgICBkZXRhaWxzLmlubmVyVGV4dCA9IGRldGFpbHNEYXRhO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZGRUYXNrVG9MaXN0KG5ldyBUYXNrKHByb2plY3ROYW1lLCBjaGVja2JveC5jaGVja2VkLCB0YXNrVGl0bGUsIGRhdGVEYXRhLCBkZXRhaWxzRGF0YSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdClcbiAgICAgICAgY2xvc2VNb2RhbCgpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnRzKHRhc2tPYmplY3QpIHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NDb250YWluZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXN2Z1wiKTtcblxuICAgIGNvbnN0IGVkaXRTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGVkaXRTdmcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2VkaXQuc3ZnXCI7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3ZnXCIpO1xuXG4gICAgY29uc3QgZGVsZXRlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkZWxldGVTdmcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3RyYXNoLTIuc3ZnXCI7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzXCIpO1xuXG4gICAgZWRpdEJ1dHRvbi5hcHBlbmQoZWRpdFN2Zyk7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZChkZWxldGVTdmcpO1xuICAgIHRhc2suYXBwZW5kKGNoZWNrYm94LCB0aXRsZSwgZGF0ZSwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrLCBkZXRhaWxzKTtcbiAgICB0YXNrTGlzdC5hcHBlbmQodGFza0NvbnRhaW5lcik7XG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrT2JqZWN0Lm5hbWU7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2tPYmplY3QuY2hlY2tCb3g7XG4gICAgZGF0ZS52YWx1ZSA9IHRhc2tPYmplY3QuZGF0ZTtcbiAgICBkZXRhaWxzLmlubmVyVGV4dCA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb247XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmZ1bmN0aW9uIHNldERhdGEoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWZhdWx0UHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdCkpO1xufVxuZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=