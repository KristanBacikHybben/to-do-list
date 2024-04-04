const addToTheList = document.querySelector("#addButton");
const listAdded = document.getElementById("addedItems");
const yourInput = document.getElementById("yourInput");


function addToList() {
    addToTheList.addEventListener("click", () => {
        let yourInputValue = yourInput.value;
        const listItem = document.createElement('li');
        listItem.id = "listItem";
        listItem.textContent = yourInputValue;
        
        yourInput.value = "";

        const remove = document.createElement('button');
        remove.className = "removeButton";
        remove.textContent = "DONE";
        remove.addEventListener("click", () => {
            listItem.remove();
        })
        listItem.appendChild(remove);
        
        listAdded.appendChild(listItem);

    })
}



addToList();

