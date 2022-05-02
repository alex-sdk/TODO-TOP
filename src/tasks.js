export { createTaskElements }

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