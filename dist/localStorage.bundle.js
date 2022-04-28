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
    constructor(checkBox, name, date, description) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEb0M7QUFDYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBVztBQUNuQixRQUFRLGtEQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNqSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUM7QUFDQSwwREFBMEQscURBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y3JlYXRlTW9kYWwsIG9wZW5Nb2RhbH1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdkNvbnRhaW5lcnMobmFtZSwgcmVxdWlyZWQsIG1heGxlbiwgbWlubGVuLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJEZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm1heExlbmd0aCA9IG1heGxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IG1pbmxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyZXF1aXJlZCkgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGRpdi5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIFxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi5pZCA9IFwiY2xvc2UtbW9kYWxcIjtcbiAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIlxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrXCIpXG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIFRhc2tcIjtcbiAgICBcbiAgICBjb25zdCBkaXYxID0gY3JlYXRlRGl2Q29udGFpbmVycyhcIlRhc2tcIiwgdHJ1ZSwgMjUsIDEsIFwidGV4dFwiKTtcbiAgICBjb25zdCBkaXYyID0gY3JlYXRlRGl2Q29udGFpbmVycyhcIkRhdGVcIiwgdHJ1ZSwgMCwgMCwgXCJkYXRlXCIpO1xuICAgIGNvbnN0IGRpdjMgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiRGVzY3JpcHRpb25cIiwgZmFsc2UsIDMwMCk7XG5cbiAgICBmb3JtLmFwcGVuZChjbG9zZUJ1dHRvbiwgZGl2MSwgZGl2MiwgZGl2MywgYWRkQnV0dG9uKTtcbiAgICBtb2RhbC5hcHBlbmQoZm9ybSk7XG59XG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRlbGV0ZU1vZGFsRWxlbWVudHMoKVxufVxuZnVuY3Rpb24gZGVsZXRlTW9kYWxFbGVtZW50cygpIHtcbiAgICBtb2RhbC5yZXBsYWNlQ2hpbGRyZW4oKVxufVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKTsiLCJleHBvcnQgeyBwcm9qZWN0cywgZGVmYXVsdFByb2plY3QgfTtcbmltcG9ydCB7IGNyZWF0ZU1vZGFsLCBvcGVuTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiOyAgIFxuICAgIFxuZnVuY3Rpb24gY2xpY2tBZGRQcm9qZWN0KCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIHJlbW92ZUlucHV0RWxlbWVudHMoKSB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGlucHV0KTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoY2hlY2ttYXJrQnRuKTtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5UHJvamVjdFwiKTtcbiAgICAgICAgcHJvamVjdExpc3RCdG4uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmQocHJvamVjdExpc3RCdG4pO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZChyZW1vdmVQcm9qZWN0QnRuKVxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdCk7XG5cbiAgICAgICAgZGVmYXVsdFByb2plY3QuYWRkUHJvamVjdChwcm9qZWN0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnByb2plY3RzKTtcblxuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QucHJvamVjdHMpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2ttYXJrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHRyYXNoY2FuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGNoZWNrbWFyay5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY2hlY2suc3ZnXCI7XG4gICAgdHJhc2hjYW5JbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3RyYXNoLTIuc3ZnXCI7XG5cbiAgICBjaGVja21hcmtCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICBjaGVja21hcmtCdG4uYXBwZW5kKGNoZWNrbWFyayk7XG4gICAgXG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgZGVsZXRlQnRuLmFwcGVuZCh0cmFzaGNhbkltZyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInRleHRcIik7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0UHJvamVjdFwiKTtcbiAgICBcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoaW5wdXQpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChjaGVja21hcmtCdG4pO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZChkZWxldGVCdG4pO1xuICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY2hlY2ttYXJrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJQcm9qZWN0IE5hbWUgQ2Fubm90IGJlIGVtcHR5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVByb2plY3QoKVxuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW1vdmVJbnB1dEVsZW1lbnRzKClcbiAgICB9KTtcbn0gXG5cbmZ1bmN0aW9uIHByb2plY3RzKCkgeyAgICBcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0FkZFByb2plY3QpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlZmF1bHRQcm9qZWN0LmNyZWF0ZVRhc2spO1xufVxuY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihUaXRsZSwgVGFza3MsIHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMuVGl0bGUgPSBUaXRsZTtcbiAgICAgICAgdGhpcy5UYXNrcyA9IFRhc2tzO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZQcm9qZWN0cyA9IHByb2plY3RzLmxlbmd0aFxuICAgIH1cblxuICAgIGNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGNyZWF0ZU1vZGFsKClcbiAgICAgICAgb3Blbk1vZGFsKClcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0ID0gKFRpdGxlKSA9PiB7XG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChUaXRsZSk7XG4gICAgfVxuICAgIHJlbW92ZVByb2plY3QgPSAoZGl2KSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihkaXYuaW5uZXJUZXh0KSlcbiAgICB9XG5cbn1cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrQm94LCBuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmNoZWNrQm94ID0gY2hlY2tCb3g7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5jb25zdCBkZWZhdWx0VGl0bGUgPSBcIlByb2plY3RcIjtcbmNvbnN0IGFsbFRhc2tzID0gW107XG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChkZWZhdWx0VGl0bGUsIGFsbFRhc2tzLCBhbGxQcm9qZWN0cyk7XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25TdHlsaW5nXCIpO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZnVuY3Rpb24gc2V0RGF0YSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlZmF1bHRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9qZWN0KSk7XG59XG5mdW5jdGlvbiByZXN0b3JlKCkge1xuICAgIFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==