import { getLocalStorage, saveToLocalStorage } from "../constants/handleStorage.js";
import { keyName, tooManyCharactersMessage } from "../constants/variables.js";
import createHTML from "../index.js";

const reminder = document.querySelector(".reminder");

const input = document.querySelector("input");
input.addEventListener("keyup", countCharacters);

export default function addNewToDo() {

    const currentList = getLocalStorage(keyName);

    const currentDate = Date.now();
    const dateWillBeDeleted = Date.now() + 2592000000; //30 days into the future

    const inputValue = input.value.trim();
    const newToDo = { id: currentDate, value: inputValue, isImportant: false, dateCreated: currentDate, dateWillBeDeleted: dateWillBeDeleted }

    if (inputValue.length > 0 && inputValue.length <= 30) {

        currentList.push(newToDo);
        saveToLocalStorage(keyName, currentList);
        createHTML(currentList);
        input.value = "";
        input.focus();
    };
};

function countCharacters(event) {

    const characterCount = event.target.value.trim().length;

    reminder.innerHTML = tooManyCharactersMessage(characterCount);
};