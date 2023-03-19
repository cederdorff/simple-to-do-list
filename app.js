"use strict";

window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
    document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
    // create element: li, span, button
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    //add content to span and button
    listText.textContent = newToDo.value;
    listBtn.textContent = "Delete";

    // append span and button to li
    listItem.appendChild(listText);
    listItem.appendChild(listBtn);

    //append li to list (ul)
    list.appendChild(listItem);

    //add click event to button
    listBtn.addEventListener("click", removeToDo);

    // reset input and focus
    newToDo.value = "";
    newToDo.focus();
}

function removeToDo() {
    // removes the parent node (li) of this (button) from the DOM
    this.parentNode.remove();
}
