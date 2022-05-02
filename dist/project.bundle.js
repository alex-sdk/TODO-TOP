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

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskElements": () => (/* binding */ createTaskElements)
/* harmony export */ });


function createTaskElements() {
    const taskList = document.querySelector(".tasksContainer");
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");

    const task = document.createElement("div");
    task.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "test";

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
    details.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum sed architecto, dicta, ratione a cupiditate consectetur excepturi esse nihil deleniti error! Autem praesentium, dicta pariatur officia itaque quam nemo.lorem"


    const form = document.querySelector(".form");
    form.addEventListener("submit", (e) => { 
        editButton.append(editSvg);
        deleteButton.append(deleteSvg);
        task.append(checkbox, title, date, editButton, deleteButton);
        taskContainer.append(task, details);
        taskList.append(taskContainer);
        e.preventDefault()
    });
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
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



    
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
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.createModal)()
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)()
        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTaskElements)()
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkQ2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztVQy9DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDYTtBQUNKO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG1EQUFXO0FBQ25CLFFBQVEsa0RBQVM7QUFDakIsUUFBUSwyREFBa0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZSIsInNvdXJjZXMiOlsid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjcmVhdGVNb2RhbCwgb3Blbk1vZGFsfVxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlRGl2Q29udGFpbmVycyhuYW1lLCByZXF1aXJlZCwgbWF4bGVuLCBtaW5sZW4sIHR5cGUpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmIChuYW1lID09PSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYWJlbC5odG1sRm9yID0gbmFtZTtcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgICAgIGlucHV0LmlkID0gbmFtZTtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gbWF4bGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gbWlubGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uaWQgPSBcImNsb3NlLW1vZGFsXCI7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKVxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gICAgXG4gICAgY29uc3QgZGl2MSA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJUYXNrXCIsIHRydWUsIDI1LCAxLCBcInRleHRcIik7XG4gICAgY29uc3QgZGl2MiA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEYXRlXCIsIHRydWUsIDAsIDAsIFwiZGF0ZVwiKTtcbiAgICBjb25zdCBkaXYzID0gY3JlYXRlRGl2Q29udGFpbmVycyhcIkRlc2NyaXB0aW9uXCIsIGZhbHNlLCAzMDApO1xuXG4gICAgZm9ybS5hcHBlbmQoY2xvc2VCdXR0b24sIGRpdjEsIGRpdjIsIGRpdjMsIGFkZEJ1dHRvbik7XG4gICAgbW9kYWwuYXBwZW5kKGZvcm0pO1xufVxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkZWxldGVNb2RhbEVsZW1lbnRzKClcbn1cbmZ1bmN0aW9uIGRlbGV0ZU1vZGFsRWxlbWVudHMoKSB7XG4gICAgbW9kYWwucmVwbGFjZUNoaWxkcmVuKClcbn1cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7IiwiZXhwb3J0IHsgY3JlYXRlVGFza0VsZW1lbnRzIH1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwidGVzdFwiO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICAgIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3ZnXCIpO1xuXG4gICAgY29uc3QgZWRpdFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZWRpdFN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvZWRpdC5zdmdcIjtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJmYS1zdmdcIik7XG5cbiAgICBjb25zdCBkZWxldGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZVN2Zy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvdHJhc2gtMi5zdmdcIjtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgZGV0YWlscy5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlcm8gY3VtIHNlZCBhcmNoaXRlY3RvLCBkaWN0YSwgcmF0aW9uZSBhIGN1cGlkaXRhdGUgY29uc2VjdGV0dXIgZXhjZXB0dXJpIGVzc2UgbmloaWwgZGVsZW5pdGkgZXJyb3IhIEF1dGVtIHByYWVzZW50aXVtLCBkaWN0YSBwYXJpYXR1ciBvZmZpY2lhIGl0YXF1ZSBxdWFtIG5lbW8ubG9yZW1cIlxuXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4geyBcbiAgICAgICAgZWRpdEJ1dHRvbi5hcHBlbmQoZWRpdFN2Zyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlU3ZnKTtcbiAgICAgICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIHRpdGxlLCBkYXRlLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrLCBkZXRhaWxzKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IHByb2plY3RzLCBkZWZhdWx0UHJvamVjdCB9O1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwsIG9wZW5Nb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrRWxlbWVudHMgfSBmcm9tIFwiLi90YXNrc1wiO1xuICAgIFxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUlucHV0RWxlbWVudHMoKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoY2hlY2ttYXJrQnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5UHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdExpc3RCdG4uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmQocHJvamVjdExpc3RCdG4pO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZChyZW1vdmVQcm9qZWN0QnRuKVxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdCk7XG5cbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnByb2plY3RzKTtcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QucHJvamVjdHMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2ttYXJrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHRyYXNoY2FuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGNoZWNrbWFyay5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY2hlY2suc3ZnXCI7XG4gICAgdHJhc2hjYW5JbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3RyYXNoLTIuc3ZnXCI7XG5cbiAgICBjaGVja21hcmtCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICBjaGVja21hcmtCdG4uYXBwZW5kKGNoZWNrbWFyayk7XG4gICAgXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgZGVsZXRlQnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInRleHRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0UHJvamVjdFwiKTtcbiAgICBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoaW5wdXQpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChjaGVja21hcmtCdG4pO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChkZWxldGVCdG4pO1xuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY2hlY2ttYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQcm9qZWN0IE5hbWUgQ2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVByb2plY3QoKVxuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcbn0gXG5cbmZ1bmN0aW9uIHByb2plY3RzKCkgeyAgICBcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFByb2plY3QpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlZmF1bHRQcm9qZWN0LmNyZWF0ZVRhc2spO1xufVxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihUaXRsZSwgVGFza3MsIHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMuVGl0bGUgPSBUaXRsZTtcbiAgICAgICAgdGhpcy5UYXNrcyA9IFRhc2tzO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZQcm9qZWN0cyA9IHByb2plY3RzLmxlbmd0aFxuICAgIH1cblxuICAgIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGNyZWF0ZU1vZGFsKClcbiAgICAgICAgb3Blbk1vZGFsKClcbiAgICAgICAgY3JlYXRlVGFza0VsZW1lbnRzKClcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0ID0gKFRpdGxlKSA9PiB7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChUaXRsZSk7XG4gICAgfVxuICAgIHJlbW92ZVByb2plY3QgPSAoZGl2KSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihkaXYuaW5uZXJUZXh0KSlcbiAgICB9XG5cbn1cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIGNoZWNrQm94LCBuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNoZWNrQm94ID0gY2hlY2tCb3g7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5jb25zdCBkZWZhdWx0VGl0bGUgPSBcIlByb2plY3RcIjtcbmNvbnN0IGFsbFRhc2tzID0gW107XG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChkZWZhdWx0VGl0bGUsIGFsbFRhc2tzLCBhbGxQcm9qZWN0cyk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25TdHlsaW5nXCIpO1xuXG5cbi8vb24gc3VibWl0IGdyYWIgZGF0YSBmcm9tIG1vZGFsIGVsZW1lbnRcbi8vY3JlYXRlIHRhc2sgb2JqZWN0XG4vL3B1c2ggdGFzayBvYmplY3QgdG8gYWNjb3JkaW5nIHByb2plY3QgbGlzdFxuLy9zaWRlIGJhciBwcm9qZWN0IGJ1dHRvbnMgb24gY2xpY2sgZGlzcGxheSBwcm9qZWN0IHRhc2sgbGlzdHMgc29ydGVkIGJ5IGRhdGVcbi8vaG9tZSBidXR0b24gZnVuY3Rpb25hbGl0eVxuLy9lZGl0IHRhc2sgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbi8vZGVsZXRlIHRhc2sgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbi8vbG9jYWwgc3RvcmFnZSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==