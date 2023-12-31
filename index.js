const input = document.getElementById("addTask");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const taskContainer = document.querySelector(".container");
const noTask = document.getElementById("noTask");
const savedInputs = localStorage.getItem("tasks");
let savedTasks=[];
if (!savedInputs==[]){
  savedTasks=JSON.parse(localStorage.getItem("tasks"));
}

clearButton.disabled = true;
const addNewTask = () => {
  taskContainer.style.display = "block";
  noTask.style.display = "none";
  const newTaskContainer = document.createElement("div");
  const newTask = document.createElement("p");
  const newCheckbox = document.createElement("input");
  newTaskContainer.classList.add("task__container");
  newTask.classList.add("taskNew");
  noTask.classList.add("addTask");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.classList.add("checkboxNew");
  taskContainer.appendChild(newTaskContainer);
  newTaskContainer.appendChild(newTask);
  newTaskContainer.appendChild(newCheckbox);
  newTask.textContent = input.value;
};
const addTask = () => {
  if (!input.value == "") {
    addNewTask();
    savedTasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    input.value = "";
    clearButton.disabled = false;
    clearButton.classList.add("button");
    clearButton.classList.remove("b-clear");
  }
};

console.log(savedTasks);
if (savedTasks) {
  for (let task of savedTasks) {
    taskContainer.style.display = "block";
    noTask.style.display = "none";
    const newTaskContainer = document.createElement("div");
    const newTask = document.createElement("p");
    const newCheckbox = document.createElement("input");
    newTaskContainer.classList.add("task__container");
    newTask.classList.add("taskNew");
    noTask.classList.add("addTask");
    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.classList.add("checkboxNew");
    taskContainer.appendChild(newTaskContainer);
    newTaskContainer.appendChild(newTask);
    newTaskContainer.appendChild(newCheckbox);
    newTask.textContent = task;
    clearButton.disabled = false;
    clearButton.classList.add("button");
    clearButton.classList.remove("b-clear");
  }
}

addButton.addEventListener("click", addTask);


clearButton.addEventListener("click", () => {
  savedTasks.length = 0;
  taskContainer.style.display = "none";
  taskContainer.innerHTML = "";
  noTask.style.display = "block";
  clearButton.disabled = true;
  clearButton.classList.remove("button");
  clearButton.classList.add("b-clear");
  localStorage.removeItem("tasks");
  
});
