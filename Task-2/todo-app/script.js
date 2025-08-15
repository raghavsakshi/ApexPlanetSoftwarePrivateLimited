document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button class="delete">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";

  li.querySelector(".delete").addEventListener("click", function () {
    li.remove();
  });
});
