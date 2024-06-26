// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
for(let i = 0; i < threeContacts.length; i++){

const displayContacts = threeContacts[i];

const displayRow = document.createElement("tr");
displayRow.innerHTML = `
  <td>
    <img src="${displayContacts.pictureUrl}" />
  </td>
  <td> ${displayContacts.name} </td>
  <td> ${displayContacts.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(displayRow);

 // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...

function removeRow(){
  displayRow.remove();
}

const deleteButton = displayRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", removeRow);

 // ITERATION 3 - Like Buttons

  // Your code goes here ...



const likeButton = displayRow.querySelector(".btn-like");

function liking(){
  likeButton.classList.toggle("selected");
}

likeButton.addEventListener("click", liking);



}

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
function addingRandom(){

  const randomIndex2 = Math.floor(Math.random() * contacts.length);

  const randomContact2 = contacts[randomIndex2];

  const randomRow = document.createElement("tr");
randomRow.innerHTML = `
  <td>
    <img src="${randomContact2.pictureUrl}" />
  </td>
  <td> ${randomContact2.name} </td>
  <td> ${randomContact2.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(randomRow);
}

buttonAddRandom.addEventListener("click", addingRandom);

