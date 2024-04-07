const addToTheList = document.querySelector("#addButton");
const listAdded = document.getElementById("addedItems");
const yourInput = document.getElementById("yourInput");
const history = document.getElementById("history");
const historyButton = document.getElementById("historyButton");

function addToList() {
    addToTheList.addEventListener("click", () => {
        let yourInputValue = yourInput.value;
        const listItem = document.createElement('li');
        listItem.id = "listItem";
        listItem.textContent = yourInputValue;
        
        yourInput.value = "";

        const removed = document.createElement('button');
        removed.className = "removeButton";
        removed.textContent = "REMOVE";
        removed.addEventListener("click", () => {
            moveItemToHistory(listItem);

        })

        listItem.appendChild(removed);
        
        listAdded.appendChild(listItem);
    })
}

function moveItemToHistory(item) {
    listAdded.removeChild(item);
    history.appendChild(item);
}
historyButton.addEventListener("click", () => {
    if (history.style.display === "block") {
        history.style.display = "none";
    } else {
        history.style.display = "block";
    }
});


addToList();

