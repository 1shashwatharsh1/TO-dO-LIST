// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task function
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");

    // Task text
    const task = document.createElement("span");
    task.textContent = taskText;
    li.appendChild(task);

    // Mark task as completed
    task.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    // Delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear input field
  }
});
