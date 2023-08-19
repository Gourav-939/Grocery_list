// references to HTML elements
const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const groceryList = document.getElementById("groceryList");

// Add event listener to "Add Item" button
addItemBtn.addEventListener("click", addItemToList);


// Function to add items 
function addItemToList() {
  const newItem = itemInput.value.trim();
  if (newItem !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = newItem;


    // add delete button
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    deletebutton.classList.add("delete-botton");
    listItem.appendChild(deletebutton);

    groceryList.appendChild(listItem);  
    itemInput.values = "";


    // Add event listener to delete button
    deletebutton.addEventListener("click", function() {
        groceryList.removeChild(listItem);

    });
  }
}
