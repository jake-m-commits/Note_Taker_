// js content --- button functionality
const dark_theme_btn = document.querySelector("#dark");
const new_note_btn = document.querySelector("#new_note");
const save_btn = document.querySelector("#save");
const cancel_btn = document.querySelector("#cancel");
let hidden_elements = null;
const notesArray = [{title:"note one", body:"this is my first note"},
                    {title:"note two", body:"this is my second note"}];

function theme() {
    if (dark_theme_btn.textContent === "Dark Theme") {
        document.body.style.backgroundColor = "#191724";
        document.body.style.color = "#e0def4";
        document.querySelector("#take_note").style.backgroundColor = "#c4a7e7";
        document.querySelector("#nav_list").style.backgroundColor = "#555169"
        dark_theme_btn.textContent = "Light Theme";
    } else {
        document.body.style.backgroundColor = "#faf4ed";
        document.body.style.color = "#2A273F";
        document.querySelector("#take_note").style.backgroundColor = "white";
        document.querySelector("#nav_list").style.backgroundColor = "#E0DEF4"
        dark_theme_btn.textContent = "Dark Theme";
    }
}

function cancel() {
    document.getElementById("note_taker").style.visibility = "hidden";
    document.getElementById("bottom_button").style.visibility = "hidden";
    hidden_elements = true;
}

function new_note() {
    if (hidden_elements === true) {
        document.getElementById("note_taker").style.visibility = "initial";
        document.getElementById("bottom_button").style.visibility = "initial";
        hidden_elements = false;
    } else if (hidden_elements === false) {
        document.getElementById("take_note").value = "";
    }
}

function addListItem(title) {
    const ul = document.getElementById("save_notes_here");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(title));
    ul.appendChild(li);
}

function save() {
    if (document.getElementById("take_note").value != "") {
        user = prompt("Enter a title for your note: ");
        notesArray.push({title:user, body:(document.getElementById("take_note").value)});
        addListItem(user);
        alert(`The note "${user}" has been successfully saved!`);
    }
}

document.getElementById("save_notes_here").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "LI") {
        alert(`Note: ${e.target.textContent} has been selected!`);
    }
    for (let item of notesArray) {
        if (item.title.includes(e.target.textContent) === true) {
            document.getElementById("take_note").value = item.body;
        }
    }
});

dark_theme_btn.addEventListener('click', theme);
cancel_btn.addEventListener('click', cancel);
new_note_btn.addEventListener('click', new_note);
save_btn.addEventListener('click', save);
