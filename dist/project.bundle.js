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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxtREFBVztBQUNuQixRQUFRLGtEQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL1RPRE8tdG9wLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UT0RPLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVE9ETy10b3AvLi9zcmMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtjcmVhdGVNb2RhbCwgb3Blbk1vZGFsfVxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlRGl2Q29udGFpbmVycyhuYW1lLCByZXF1aXJlZCwgbWF4bGVuLCBtaW5sZW4sIHR5cGUpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgICAgIGlmIChuYW1lID09PSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYWJlbC5odG1sRm9yID0gbmFtZTtcbiAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgICAgIGlucHV0LmlkID0gbmFtZTtcbiAgICAgICAgaW5wdXQubWF4TGVuZ3RoID0gbWF4bGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaW5wdXQubWluTGVuZ3RoID0gbWlubGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKHJlcXVpcmVkKSBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgZGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gXCJjbG9zZS1tb2RhbFwiO1xuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIilcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICAgIFxuICAgIGNvbnN0IGRpdjEgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiVGFza1wiLCB0cnVlLCAyNSwgMSwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGRpdjIgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiRGF0ZVwiLCB0cnVlLCAwLCAwLCBcImRhdGVcIik7XG4gICAgY29uc3QgZGl2MyA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEZXNjcmlwdGlvblwiLCBmYWxzZSwgMzAwKTtcblxuICAgIGZvcm0uYXBwZW5kKGNsb3NlQnV0dG9uLCBkaXYxLCBkaXYyLCBkaXYzLCBhZGRCdXR0b24pO1xuICAgIG1vZGFsLmFwcGVuZChmb3JtKTtcbn1cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGVsZXRlTW9kYWxFbGVtZW50cygpXG59XG5mdW5jdGlvbiBkZWxldGVNb2RhbEVsZW1lbnRzKCkge1xuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbigpXG59XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IHsgcHJvamVjdHMsIGRlZmF1bHRQcm9qZWN0IH07XG5pbXBvcnQgeyBjcmVhdGVNb2RhbCwgb3Blbk1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIjsgICBcbiAgICBcbmZ1bmN0aW9uIGNsaWNrQWRkUHJvamVjdCgpIHtcbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVJbnB1dEVsZW1lbnRzKCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGNoZWNrbWFya0J0bik7XG4gICAgICAgIHByb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVByb2plY3RcIik7XG4gICAgICAgIHByb2plY3RMaXN0QnRuLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImhhLXN2Z1wiKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hcHBlbmQodHJhc2hjYW5JbWcpO1xuXG4gICAgICAgIHByb2plY3QuYXBwZW5kKHByb2plY3RMaXN0QnRuKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmQocmVtb3ZlUHJvamVjdEJ0bilcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKHByb2plY3QpO1xuXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0LmFkZFByb2plY3QocHJvamVjdC5pbm5lclRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdC5wcm9qZWN0cyk7XG5cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LnByb2plY3RzKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNoZWNrbWFya0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2ttYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCB0cmFzaGNhbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBjaGVja21hcmsuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2NoZWNrLnN2Z1wiO1xuICAgIHRyYXNoY2FuSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy90cmFzaC0yLnN2Z1wiO1xuXG4gICAgY2hlY2ttYXJrQnRuLmNsYXNzTGlzdC5hZGQoXCJoYS1zdmdcIik7XG4gICAgY2hlY2ttYXJrQnRuLmFwcGVuZChjaGVja21hcmspO1xuICAgIFxuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGEtc3ZnXCIpO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmQodHJhc2hjYW5JbWcpO1xuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFByb2plY3RcIik7XG4gICAgXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKGlucHV0KTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoY2hlY2ttYXJrQnRuKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQoZGVsZXRlQnRuKTtcbiAgICBhZGRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGNoZWNrbWFya0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdCBOYW1lIENhbm5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVQcm9qZWN0KClcbiAgICAgICAgcmVtb3ZlSW5wdXRFbGVtZW50cygpXG4gICAgfSk7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVtb3ZlSW5wdXRFbGVtZW50cygpXG4gICAgfSk7XG59IFxuXG5mdW5jdGlvbiBwcm9qZWN0cygpIHsgICAgXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tBZGRQcm9qZWN0KTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWZhdWx0UHJvamVjdC5jcmVhdGVUYXNrKTtcbn1cbmNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IoVGl0bGUsIFRhc2tzLCBwcm9qZWN0cykge1xuICAgICAgICB0aGlzLlRpdGxlID0gVGl0bGU7XG4gICAgICAgIHRoaXMuVGFza3MgPSBUYXNrcztcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgICAgICB0aGlzLm51bWJlck9mUHJvamVjdHMgPSBwcm9qZWN0cy5sZW5ndGhcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrKCkge1xuICAgICAgICBjcmVhdGVNb2RhbCgpXG4gICAgICAgIG9wZW5Nb2RhbCgpXG4gICAgfVxuXG4gICAgYWRkUHJvamVjdCA9IChUaXRsZSkgPT4ge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goVGl0bGUpO1xuICAgIH1cbiAgICByZW1vdmVQcm9qZWN0ID0gKGRpdikgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YoZGl2LmlubmVyVGV4dCkpXG4gICAgfVxuXG59XG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihjaGVja0JveCwgbmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IGNoZWNrQm94O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxufVxuY29uc3QgZGVmYXVsdFRpdGxlID0gXCJQcm9qZWN0XCI7XG5jb25zdCBhbGxUYXNrcyA9IFtdO1xuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoZGVmYXVsdFRpdGxlLCBhbGxUYXNrcywgYWxsUHJvamVjdHMpO1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0XCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnV0dG9uU3R5bGluZ1wiKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9