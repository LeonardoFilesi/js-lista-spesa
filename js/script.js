// stabilisco array della lista della spesa
const listArray = ["mele", "banane", "susine", "bistecca", "pane in cassetta", "vino rosso"];

//selezionare un genitore per la list dal Dom
const ul = document.getElementById("list");

let listItem = "";
let i = 0;

while (i < listArray.length) {
    listItem += `<li class="box">Elemento Lista Spesa: ${listArray[i]}</li>`;
    i++;
}

ul.innerHTML = listItem; 

/* SE FOSSE FOR
const li = document.createElement(`li`);
    li.append(`Elemento Lista Spesa ${i}`);
    li.addEventListener(`click`, function() {
        alert(`Hai selezionato questa cosa da comperare ${i}`);
    });
    ul.append(li);
*/