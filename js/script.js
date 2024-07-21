document.addEventListener("DOMContentLoaded", () => {
  const addTodoButton = document.getElementById("add-todo");
  const newTodoInput = document.getElementById("new-todo");
  const todoList = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", addTodo);
  newTodoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText === "") return;

    const todoItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTodo);

    const todoContent = document.createElement("span");
    todoContent.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoContent);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
    newTodoInput.value = "";
  }

  function toggleTodo() {
    const todoItem = this.parentElement;
    if (this.checked) {
      todoItem.classList.add("completed");
      moveToBottom(todoItem);
    } else {
      todoItem.classList.remove("completed");
    }
  }

  function deleteTodo() {
    const todoItem = this.parentElement;
    todoItem.classList.add("deleted");
    setTimeout(() => {
      todoList.removeChild(todoItem);
    }, 500);
  }

  function moveToBottom(todoItem) {
    todoList.appendChild(todoItem);
  }
});
