import { getLocalStorage } from "./constants/handleStorage.js";
import { emptyListMessage, errorMessage, keyName } from './constants/variables.js';
import addNewToDo from './components/addNewToDo.js';
import markAsImportant from './components/markAsImportant.js';
import addToTrash from './components/addToTrash.js';
import createHeader from './components/createHeader.js';

const trash = getLocalStorage(keyName);

createHTML(trash);

export default function createHTML(arr) {

    createHeader();

    const container = document.querySelector(".container");

    try {

        container.innerHTML = "";

        if (arr.length === 0) {
            container.innerHTML = emptyListMessage;
        };

        arr.forEach(el => {

            let cssClass = "far";

            if (el.isImportant) {
                cssClass = "fa"
            };

            container.innerHTML += `
                    <li>
                        ${el.value}
                        <div>
                            <i class="${cssClass} fa-star star" title="Mark as important" data-id="${el.id}"></i>
                            <i class="fas fa-trash trashcan" data-id="${el.id}" title="Delete todo"></i>
                        </div>
                    </li>`;
        });

        const addNewToDoBtn = document.querySelector("button");
        addNewToDoBtn.addEventListener("click", addNewToDo);

        const input = document.querySelector("input");
        input.addEventListener("keypress", (event) => event.key === "Enter" ? addNewToDo() : false);

        const stars = document.querySelectorAll(".star");
        stars.forEach(star => star.addEventListener("click", markAsImportant));

        const trashcans = document.querySelectorAll(".trashcan");
        trashcans.forEach(trashcan => trashcan.addEventListener("click", addToTrash));
    } catch {
        container.innerHTML = errorMessage;
    };
};