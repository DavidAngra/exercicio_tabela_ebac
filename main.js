const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputContact = document.getElementById("contact");
let nameContacts = [];
let numberContact = [];
let completeTable = "";

form.addEventListener("submit", (ev) => {
   ev.preventDefault();

   addContactList();
   updateTable();

   inputName.value = "";
   inputContact.value = "";
});

function addContactList() {
   if (
      nameContacts.includes(inputName.value) ||
      numberContact.includes(inputContact.value)
   ) {
      alert("Contato ou número já foi adicionado a lista!");
   } else {
      nameContacts.push(inputName.value);
      numberContact.push(inputContact.value);

      let contact = `<tr>\n
      <td>${inputName.value}</td>\n
      <td>${inputContact.value}</td>\n
      </tr>`;

      completeTable += contact;
   }
}

function updateTable() {
   const tableContacts = document.querySelector("tbody");
   tableContacts.innerHTML = completeTable;
}
