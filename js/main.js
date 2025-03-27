const btn = document.querySelector(".task-submit");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

btn.addEventListener("click", function () {
	const taskText = taskInput.value.trim();

	if (taskText !== "") {
		// Si no hay texto en el input, no se crea la tarea
		// Crear una nueva tarea en la lista
		const newTask = document.createElement("li"); // Crear un li nuevo
		newTask.textContent = taskText; // Agregar el texto del input al li

		// Crear un botón para eliminar la tarea
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Eliminar";
		deleteBtn.className = "delete-btn";

		deleteBtn.addEventListener("click", function () {
			taskList.removeChild(newTask);
		});

		// Agregar el botón a la tarea
		newTask.appendChild(deleteBtn);

		// Agregar la tarea a la lista
		taskList.appendChild(newTask);

		//Limpiar el input
		taskInput.value = "";
	}
});
