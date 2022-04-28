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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RG9DO0FBQ2E7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbURBQVc7QUFDbkIsUUFBUSxrREFBUztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDakhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEM7O0FBRTVDO0FBQ0EsMERBQTBELHFEQUFjO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UT0RPLXRvcC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9UT0RPLXRvcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2NyZWF0ZU1vZGFsLCBvcGVuTW9kYWx9XG5mdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVEaXZDb250YWluZXJzKG5hbWUsIHJlcXVpcmVkLCBtYXhsZW4sIG1pbmxlbiwgdHlwZSkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiRGVzY3JpcHRpb25cIikge1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhYmVsLmh0bWxGb3IgPSBuYW1lO1xuICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgICAgICAgaW5wdXQuaWQgPSBuYW1lO1xuICAgICAgICBpbnB1dC5tYXhMZW5ndGggPSBtYXhsZW4gfHwgdW5kZWZpbmVkO1xuICAgICAgICBpbnB1dC5taW5MZW5ndGggPSBtaW5sZW4gfHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAocmVxdWlyZWQpIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBkaXYuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uaWQgPSBcImNsb3NlLW1vZGFsXCI7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKVxuICAgIGFkZEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG4gICAgXG4gICAgY29uc3QgZGl2MSA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJUYXNrXCIsIHRydWUsIDI1LCAxLCBcInRleHRcIik7XG4gICAgY29uc3QgZGl2MiA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEYXRlXCIsIHRydWUsIDAsIDAsIFwiZGF0ZVwiKTtcbiAgICBjb25zdCBkaXYzID0gY3JlYXRlRGl2Q29udGFpbmVycyhcIkRlc2NyaXB0aW9uXCIsIGZhbHNlLCAzMDApO1xuXG4gICAgZm9ybS5hcHBlbmQoY2xvc2VCdXR0b24sIGRpdjEsIGRpdjIsIGRpdjMsIGFkZEJ1dHRvbik7XG4gICAgbW9kYWwuYXBwZW5kKGZvcm0pO1xufVxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkZWxldGVNb2RhbEVsZW1lbnRzKClcbn1cbmZ1bmN0aW9uIGRlbGV0ZU1vZGFsRWxlbWVudHMoKSB7XG4gICAgbW9kYWwucmVwbGFjZUNoaWxkcmVuKClcbn1cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7IiwiZXhwb3J0IHsgcHJvamVjdHMsIGRlZmF1bHRQcm9qZWN0IH07XG5pbXBvcnQgeyBjcmVhdGVNb2RhbCwgb3Blbk1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjsgICBcbiAgICBcbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdCgpIHtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVJbnB1dEVsZW1lbnRzKCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGNoZWNrbWFya0J0bik7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hcHBlbmQodHJhc2hjYW5JbWcpO1xuXG4gICAgICAgIHByb2plY3QuYXBwZW5kKHByb2plY3RMaXN0QnRuKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmQocmVtb3ZlUHJvamVjdEJ0bilcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3QpO1xuXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFByb2plY3QocHJvamVjdC5pbm5lclRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5wcm9qZWN0cyk7XG5cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnByb2plY3RzKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNoZWNrbWFya0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCB0cmFzaGNhbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBjaGVja21hcmsuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2NoZWNrLnN2Z1wiO1xuICAgIHRyYXNoY2FuSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy90cmFzaC0yLnN2Z1wiO1xuXG4gICAgY2hlY2ttYXJrQnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgY2hlY2ttYXJrQnRuLmFwcGVuZChjaGVja21hcmspO1xuICAgIFxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmQodHJhc2hjYW5JbWcpO1xuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFByb2plY3RcIik7XG4gICAgXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGlucHV0KTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoY2hlY2ttYXJrQnRuKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNoZWNrbWFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdCBOYW1lIENhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVQcm9qZWN0KClcbiAgICAgICAgcmVtb3ZlSW5wdXRFbGVtZW50cygpXG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlSW5wdXRFbGVtZW50cygpXG4gICAgfSk7XG59IFxuXG5mdW5jdGlvbiBwcm9qZWN0cygpIHsgICAgXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tBZGRQcm9qZWN0KTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWZhdWx0UHJvamVjdC5jcmVhdGVUYXNrKTtcbn1cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IoVGl0bGUsIFRhc2tzLCBwcm9qZWN0cykge1xuICAgICAgICB0aGlzLlRpdGxlID0gVGl0bGU7XG4gICAgICAgIHRoaXMuVGFza3MgPSBUYXNrcztcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgICAgICB0aGlzLm51bWJlck9mUHJvamVjdHMgPSBwcm9qZWN0cy5sZW5ndGhcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrKCkge1xuICAgICAgICBjcmVhdGVNb2RhbCgpXG4gICAgICAgIG9wZW5Nb2RhbCgpXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCA9IChUaXRsZSkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goVGl0bGUpO1xuICAgIH1cbiAgICByZW1vdmVQcm9qZWN0ID0gKGRpdikgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YoZGl2LmlubmVyVGV4dCkpXG4gICAgfVxuXG59XG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihjaGVja0JveCwgbmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuY29uc3QgZGVmYXVsdFRpdGxlID0gXCJQcm9qZWN0XCI7XG5jb25zdCBhbGxUYXNrcyA9IFtdO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoZGVmYXVsdFRpdGxlLCBhbGxUYXNrcywgYWxsUHJvamVjdHMpO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnV0dG9uU3R5bGluZ1wiKTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmZ1bmN0aW9uIHNldERhdGEoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWZhdWx0UHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvamVjdCkpO1xufVxuZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICBcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=