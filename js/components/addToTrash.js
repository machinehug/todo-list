import { getLocalStorage, saveToLocalStorage } from "../constants/handleStorage.js";
import { trashKey, keyName } from "../constants/variables.js";
import createHTML from "../index.js"

export default function addToTrash(event) {

    const trash = getLocalStorage(trashKey);

    const currentList = getLocalStorage(keyName);

    const dateWillBeDeleted = Date.now() + 2592000000; //30 days into the future

    const trashId = parseInt(event.target.dataset.id);

    const index = currentList.findIndex(el => el.id === trashId);

    currentList[index].dateWillBeDeleted = dateWillBeDeleted;
    trash.push(currentList[index]);
    saveToLocalStorage(trashKey, trash);

    currentList.splice(index, 1);
    saveToLocalStorage(keyName, currentList);

    createHTML(currentList);
};