let inputs = document.getElementById("input");
let text = document.querySelector(".text");
function Add() {
  if (inputs.value == "") {
    alert("please enter the task");
  } else {
    let newElements = document.createElement("ul");
    newElements.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newElements);
    inputs.value = "";
    newElements.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElements.remove();
    }
  }
}
