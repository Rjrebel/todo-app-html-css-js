let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value == "") {
    msg.innerHTML = "Todo item cannot be blank";
  } else {
    msg.innerHTML = "";
    createTodo(input.value);
  }
};

let createTodo = (todo) => {
  todos.innerHTML += `<div>
    <p>${todo}</p>
    <span class="options">
      <i onclick="editTodo(this)" class="fas fa-edit"></i>
      <i onclick="deleteTodo(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;

  input.value = "";
};

let deleteTodo = (e) => {
  e.parentElement.parentElement.remove();
};

let editTodo = (e) => {
  if (input.value != "") {
    msg.innerHTML = "First save current todo and then edit another.";
  } else {
    input.value = e.parentElement.previousElementSibling.textContent;
    e.parentElement.parentElement.remove();
  }
};
