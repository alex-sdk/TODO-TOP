/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPRE8tdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVE9ETy10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UT0RPLXRvcC8uL3NyYy9tb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7Y3JlYXRlTW9kYWwsIG9wZW5Nb2RhbH1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdkNvbnRhaW5lcnMobmFtZSwgcmVxdWlyZWQsIG1heGxlbiwgbWlubGVuLCB0eXBlKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJEZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGFiZWwuaHRtbEZvciA9IG5hbWU7XG4gICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgICAgIGlucHV0Lm1heExlbmd0aCA9IG1heGxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlucHV0Lm1pbkxlbmd0aCA9IG1pbmxlbiB8fCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChyZXF1aXJlZCkgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIGRpdi5hcHBlbmQobGFiZWwsIGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gICAgXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmlkID0gXCJjbG9zZS1tb2RhbFwiO1xuICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIilcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgVGFza1wiO1xuICAgIFxuICAgIGNvbnN0IGRpdjEgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiVGFza1wiLCB0cnVlLCAyNSwgMSwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGRpdjIgPSBjcmVhdGVEaXZDb250YWluZXJzKFwiRGF0ZVwiLCB0cnVlLCAwLCAwLCBcImRhdGVcIik7XG4gICAgY29uc3QgZGl2MyA9IGNyZWF0ZURpdkNvbnRhaW5lcnMoXCJEZXNjcmlwdGlvblwiLCBmYWxzZSwgMzAwKTtcblxuICAgIGZvcm0uYXBwZW5kKGNsb3NlQnV0dG9uLCBkaXYxLCBkaXYyLCBkaXYzLCBhZGRCdXR0b24pO1xuICAgIG1vZGFsLmFwcGVuZChmb3JtKTtcbn1cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZGVsZXRlTW9kYWxFbGVtZW50cygpXG59XG5mdW5jdGlvbiBkZWxldGVNb2RhbEVsZW1lbnRzKCkge1xuICAgIG1vZGFsLnJlcGxhY2VDaGlsZHJlbigpXG59XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==