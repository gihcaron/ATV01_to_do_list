const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(deleteButton);

        taskInput.value = '';    }
}

function deleteTask(event) {
    deleteTask.classname = 'delete';
    const task = event.target.parentElement;
    taskList.removeChild(task);
}

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', deleteTask);
li.appendChild(deleteButton);


