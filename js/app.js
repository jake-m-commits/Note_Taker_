// js content --- button functionality
const dark_theme_btn = document.querySelector("#dark");
const new_note_btn = document.querySelector("#new_note");
const save_btn = document.querySelector("#save");
const cancel_btn = document.querySelector("#cancel");
let hidden_elements = null;

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

dark_theme_btn.addEventListener('click', theme);
cancel_btn.addEventListener('click', cancel);
new_note_btn.addEventListener('click', new_note);

//define dark theme function
//  let button = false
//  if (dark theme button is toggled)
//      if button === false
//          button = true
//      else
//          button = false
//  if (dark theme button is true)
//      assign css body a dark background-color
//      assign css body a light color
//      assign dark theme button with new text 'Light Theme'
//      ^^^change dark theme button color as well^^^
//  else if (dark theme button is false)
//      assign css body original background-color
//      assign css body original color
//      assign dark theme button with original text 'Dark Theme'
//      ^^^change dark theme button color to original^^^

//define cancel function
//  var cancel_button = false
//  if (cancel_button is toggled)
//      if cancel_button === false
//          cancel_button = true
//      else
//          cancel_button = false
//  if (cancel_button is true)
//      assign css note_taker with visibility:hidden
//      assign css bottom_button with visibility:hidden

//define new note function
//  let clear_note = none
//  if (new note button is toggled)
//      if clear_note === none
//          clear_note = false
//      else if clear_note === false
//          clear_note = true
//      else
//          clear_note = none
//  if (cancel_button === true) and (clear_note === false)
//      assign css note_taker with visibility:visible
//      assign css bottom_button with visibility:visible
//      assign cancel_button with false
//  else if (cancel_button === false) and (clear_note === true)
//      clear textarea
