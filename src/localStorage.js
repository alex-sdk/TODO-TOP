import { defaultProject } from "./projects";

function setData() {
    localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
}
function restore() {
    
}