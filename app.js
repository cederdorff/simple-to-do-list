"use strict";

window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
    document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
    list.insertAdjacentHTML(
        "beforeend",
        /*html*/ `
        <li>
            <span>${newToDo.value}</span>
            <button class="btn-delete">Delete</button>
            <button class="btn-update">Update</button>
        </li>`
    );

    list.querySelector("li:last-child .btn-delete").addEventListener("click", removeToDo);
    list.querySelector("li:last-child .btn-update").addEventListener("click", updateToDo);

    // reset input and focus
    newToDo.value = "";
    newToDo.focus();
}

function removeToDo() {
    this.parentNode.remove();
}

function updateToDo() {
    // remove event listener
    this.removeEventListener("click", updateToDo);
    // change button text to Save
    this.textContent = "Save";
    // add new event listener - saveToDo
    this.addEventListener("click", saveToDo);

    // get the span element with the to do text
    const toDoSpan = this.parentNode.querySelector("span");
    // set contenteditable to true
    toDoSpan.setAttribute("contenteditable", true);
    // set focus
    toDoSpan.focus();
}

function saveToDo() {
    // remove event listener, saveToDo, again
    this.removeEventListener("click", saveToDo);
    // change button text back to Update
    this.textContent = "Update";
    // add event listener, updateToDo, again
    this.addEventListener("click", updateToDo);

    // get the span element with the to do text
    const toDoSpan = this.parentNode.querySelector("span");
    // set contenteditable to false
    toDoSpan.setAttribute("contenteditable", false);
}
