import { getLocalStorage, saveToLocalStorage } from "./constants/handleStorage.js";
import { trashKey, keyName, errorMessage } from "./constants/variables.js";
import createHeader from './components/createHeader.js';

const trash = getLocalStorage(trashKey);

createHTML(trash);

function createHTML(arr) {

    createHeader();

    const container = document.querySelector(".container");
    
    try {

        container.innerHTML = "";

        if (arr.length < 1) {
            container.innerHTML = "Your trash is empty.";
        };

        arr.forEach(el => {

            container.innerHTML += `
                    <li>
                        ${el.value}
                        <div>
                            <i class="fas fa-history restore" data-id="${el.id}"></i>
                            <i class="fas fa-trash trashcan" data-id="${el.id}" title="Delete todo forever."></i>
                        </div>
                    </li>`;
        });

        const trashcans = document.querySelectorAll(".trashcan");
        trashcans.forEach(trashcan => trashcan.addEventListener("click", (event) => deleteToDoForEver(event)));

        const restoreIcons = document.querySelectorAll(".restore");
        restoreIcons.forEach(icon => icon.addEventListener("click", (event) => restoreToDo(event)));
    } catch {
        container.innerHTML = errorMessage;
    };
};

function deleteToDoForEver(event) {

    const currentTrash = getLocalStorage(trashKey);

    const id = parseInt(event.target.dataset.id);
    const index = currentTrash.findIndex(el => el.id === id);

    currentTrash.splice(index, 1);

    saveToLocalStorage(trashKey, currentTrash);
    
    createHTML(currentTrash);
};

function restoreToDo(event) {

    const currentTrash = getLocalStorage(trashKey);
    const currentToDos = getLocalStorage(keyName);

    const id = parseInt(event.target.dataset.id);
    const index = currentTrash.findIndex(el => el.id === id);

    currentTrash[index].dateWillBeDeleted = false;

    currentToDos.push(currentTrash[index]);
    currentTrash.splice(index, 1);

    saveToLocalStorage(keyName, currentToDos);
    saveToLocalStorage(trashKey, currentTrash);

    createHTML(currentTrash);    
};