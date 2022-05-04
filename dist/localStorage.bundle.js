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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUM7QUFDQSwwREFBMEQscURBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y3JlYXRlTW9kYWwsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbH1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdkNvbnRhaW5lcnMobmFtZSwgcmVxdWlyZWQsIG1heGxlbiwgbWlubGVuLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJEZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm1heExlbmd0aCA9IG1heGxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IG1pbmxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyZXF1aXJlZCkgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGRpdi5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gXCJjbG9zZS1tb2RhbFwiO1xuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIilcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICAgIFxuICAgIGNvbnN0IGRpdjEgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiVGFza1wiLCB0cnVlLCAyNSwgMSwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGRpdjIgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiRGF0ZVwiLCB0cnVlLCAwLCAwLCBcImRhdGVcIik7XG4gICAgY29uc3QgZGl2MyA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEZXNjcmlwdGlvblwiLCBmYWxzZSwgMzAwKTtcblxuICAgIGZvcm0uYXBwZW5kKGNsb3NlQnV0dG9uLCBkaXYxLCBkaXYyLCBkaXYzLCBhZGRCdXR0b24pO1xuICAgIG1vZGFsLmFwcGVuZChmb3JtKTtcbn1cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGVsZXRlTW9kYWxFbGVtZW50cygpXG59XG5mdW5jdGlvbiBkZWxldGVNb2RhbEVsZW1lbnRzKCkge1xuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbigpXG59XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpOyIsImV4cG9ydCB7IHByb2plY3RFdmVudExpc3RlbmVycywgZGVmYXVsdFByb2plY3R9O1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwsIG9wZW5Nb2RhbH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2tFbGVtZW50cywgY3JlYXRlTmV3VGFza0Zyb21Nb2RhbCB9IGZyb20gXCIuL3Rhc2tzXCI7XG4gICAgXG5jbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKFRhc2tzLCBwcm9qZWN0cykge1xuICAgICAgICB0aGlzLlRhc2tzID0gVGFza3M7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrKCkge1xuICAgICAgICBjcmVhdGVNb2RhbCgpXG4gICAgICAgIG9wZW5Nb2RhbCgpXG4gICAgICAgIGNyZWF0ZU5ld1Rhc2tGcm9tTW9kYWwoKVxuICAgIH1cbiAgICBhZGRUYXNrVG9MaXN0ID0gKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5UYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBhZGRQcm9qZWN0ID0gKFRpdGxlKSA9PiB7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChUaXRsZSk7XG4gICAgfVxuICAgIHJlbW92ZVByb2plY3QgPSAoZGl2KSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihkaXYuaW5uZXJUZXh0KSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdCgpIHtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVJbnB1dEVsZW1lbnRzKCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGNoZWNrbWFya0J0bik7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hcHBlbmQodHJhc2hjYW5JbWcpO1xuXG4gICAgICAgIHByb2plY3QuYXBwZW5kKHByb2plY3RMaXN0QnRuLCByZW1vdmVQcm9qZWN0QnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3QpO1xuXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFByb2plY3QocHJvamVjdC5pbm5lclRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RuYW1lXCIpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdExpc3RCdG4uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgdGFza3NDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcblxuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QuVGFza3MuZm9yRWFjaCh0YXNrT2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFza09iamVjdC5wcm9qZWN0ID09IHByb2plY3ROYW1lLmlubmVyVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRWxlbWVudHModGFza09iamVjdCk7ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2ttYXJrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHRyYXNoY2FuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGNoZWNrbWFyay5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY2hlY2suc3ZnXCI7XG4gICAgdHJhc2hjYW5JbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3RyYXNoLTIuc3ZnXCI7XG5cbiAgICBjaGVja21hcmtCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICBjaGVja21hcmtCdG4uYXBwZW5kKGNoZWNrbWFyayk7XG4gICAgXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgZGVsZXRlQnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInRleHRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0UHJvamVjdFwiKTtcbiAgICBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoaW5wdXQsIGNoZWNrbWFya0J0biwgZGVsZXRlQnRuKTtcbiAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNoZWNrbWFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdCBOYW1lIENhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVQcm9qZWN0KClcbiAgICAgICAgcmVtb3ZlSW5wdXRFbGVtZW50cygpXG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlSW5wdXRFbGVtZW50cygpXG4gICAgfSk7XG59IFxuXG5mdW5jdGlvbiBwcm9qZWN0RXZlbnRMaXN0ZW5lcnMoKSB7ICAgIFxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrQWRkUHJvamVjdCk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVmYXVsdFByb2plY3QuY3JlYXRlVGFzayk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICAgICAgdGFza3NDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0bmFtZVwiKS5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICBkZWZhdWx0UHJvamVjdC5UYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzKHRhc2spOyBcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGFsbFRhc2tzID0gW107XG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChhbGxUYXNrcywgYWxsUHJvamVjdHMpO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnV0dG9uU3R5bGluZ1wiKTtcblxuXG4vL3Byb3Blcmx5IG1hbmFnZSBkYXRhIG9uIGRlbGV0aW9uXG4vL3VwZGF0ZSBjaGVja21hcmsgZGF0YVxuLy9zdHlsaW5nIHRhc2sgaWYgY2hlY2tlZCBvZmZcbi8vc29ydCBieSBkYXRlXG4vL2VkaXQgdGFzayBidXR0b24gZnVuY3Rpb25hbGl0eVxuLy9kZWxldGUgdGFzayBidXR0b24gZnVuY3Rpb25hbGl0eVxuLy9sb2NhbCBzdG9yYWdlIiwiZXhwb3J0IHsgY3JlYXRlVGFza0VsZW1lbnRzLCBjcmVhdGVOZXdUYXNrRnJvbU1vZGFsIH1cbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiO1xuaW1wb3J0IHsgZGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgY2hlY2tCb3gsIG5hbWUsIGRhdGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY2hlY2tCb3ggPSBjaGVja0JveDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tGcm9tTW9kYWwoKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzQ29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG4gICAgZGF0ZS50eXBlID0gXCJkYXRlXCI7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBlZGl0U3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0U3ZnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9lZGl0LnN2Z1wiO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZhLXN2Z1wiKTtcblxuICAgIGNvbnN0IGRlbGV0ZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlU3ZnLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy90cmFzaC0yLnN2Z1wiO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcblxuICAgIGVkaXRCdXR0b24uYXBwZW5kKGVkaXRTdmcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlU3ZnKTtcbiAgICB0YXNrLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRhdGUsIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmQodGFzaywgZGV0YWlscyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUYXNrXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGV0YWlsc0RhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdG5hbWVcIikuaW5uZXJUZXh0O1xuICAgICAgICBcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFza1RpdGxlO1xuICAgICAgICBkYXRlLnZhbHVlID0gZGF0ZURhdGE7XG4gICAgICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gZGV0YWlsc0RhdGE7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRhc2tUb0xpc3QobmV3IFRhc2socHJvamVjdE5hbWUsIGNoZWNrYm94LmNoZWNrZWQsIHRhc2tUaXRsZSwgZGF0ZURhdGEsIGRldGFpbHNEYXRhKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KVxuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudHModGFza09iamVjdCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3ZnXCIpO1xuXG4gICAgY29uc3QgZWRpdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdFN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvZWRpdC5zdmdcIjtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvdHJhc2gtMi5zdmdcIjtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG5cbiAgICBlZGl0QnV0dG9uLmFwcGVuZChlZGl0U3ZnKTtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kKGRlbGV0ZVN2Zyk7XG4gICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIHRpdGxlLCBkYXRlLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2ssIGRldGFpbHMpO1xuICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2tPYmplY3QubmFtZTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFza09iamVjdC5jaGVja0JveDtcbiAgICBkYXRlLnZhbHVlID0gdGFza09iamVjdC5kYXRlO1xuICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gdGFza09iamVjdC5kZXNjcmlwdGlvbjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZnVuY3Rpb24gc2V0RGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlZmF1bHRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9qZWN0KSk7XG59XG5mdW5jdGlvbiByZXN0b3JlKCkge1xuICAgIFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==