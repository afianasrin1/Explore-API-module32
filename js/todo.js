function loadToDos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayToDos(data));
}

function displayToDos(todos) {
  const todoContainer = document.getElementById("to-do");
  for (const todo of todos) {
    const todoDiv = document.createElement("div");
    console.log(todo);
    todoDiv.innerHTML = `
    <h3> title:${todo.title}</h3>
    <h4> id:${todo.id}</h4>
    `;
    todoContainer.appendChild(todoDiv);
  }
}

loadToDos();
