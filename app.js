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
            <button>Delete</button>
        </li>`
    );

    list.querySelector("li:last-child button").addEventListener("click", removeToDo);

    // reset input and focus
    newToDo.value = "";
    newToDo.focus();
}

function removeToDo() {
    this.parentNode.remove();
}
