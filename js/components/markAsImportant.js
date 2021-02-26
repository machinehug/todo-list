import { getLocalStorage, saveToLocalStorage } from "../constants/handleStorage.js";
import { keyName } from "../constants/variables.js";

export default function markAsImportant(event) {

    const currentList = getLocalStorage(keyName);

    const star = event.target;

    star.classList.toggle("fa");
    star.classList.toggle("far");

    const starId = parseInt(event.target.dataset.id);
    const index = currentList.findIndex(el => el.id === starId);

    currentList[index].isImportant = true;

    saveToLocalStorage(keyName, currentList);

    if (star.classList.contains("fa")) {
        currentList[index].isImportant = true;
        saveToLocalStorage(keyName, currentList);
    } else {
        currentList[index].isImportant = false;
        saveToLocalStorage(keyName, currentList);
    };
};