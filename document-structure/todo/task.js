const taskInput = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

button.addEventListener('click', function (event) {    
    
    taskList.insertAdjacentHTML ("beforeend", `
    <div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove" onclick="this.closest('.task').outerHTML = '';">&times;</a>
    </div>        
    `);

    taskInput.value = '';
    event.preventDefault();    
});