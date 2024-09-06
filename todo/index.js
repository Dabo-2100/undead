let head = document.querySelector("head");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
head.innerHTML += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`;
let tasks = [];

renderTasks();

function renderTasks() {
  ul.innerHTML = "";
  tasks.forEach((el, index) => {
    ul.innerHTML += `
    <li class="d-flex gap-3 py-2 align-items-center justify-content-between">
        <p class="mb-0" 
            onclick="toggleTaskDone(${index})"
            style="
            text-decoration :${el.isDone == true ? "line-through" : "none"}">
            ${el.name}
        </p>
        <div class="d-flex gap-3">
            <input onclick="toggleTaskDone(${index})" type="checkbox" ${
      el.isDone == true ? "checked" : null
    }>
            <button class="btn btn-danger" onclick="deleteTask(${index})">del</button>
            <button class="btn btn-warning" onclick="updateTask(${index})">Update</button>
        </div>
    </li>`;
  });
}

function addNewTask() {
  let newTaskName = input.value;
  let taskObj = {
    name: newTaskName,
    isDone: false,
    isEdit: false,
  };
  tasks.push(taskObj);
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTaskDone(index) {
  tasks[index].isDone = !tasks[index].isDone;
  renderTasks();
}
