document.getElementById('add-task-button').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim(); // i remove the spaces with trim
    const errorMessage = document.getElementById('error-message');
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
    
        // create a new task (list item)
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // create the "Done" button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.style.marginLeft = '10px'; // add some spacing

        // add functionality to the "Done" button
        doneButton.addEventListener('click', function () {
            // toggle the task completion
            if (newTask.classList.contains('done')) {
                newTask.classList.remove('done');
                doneButton.textContent = 'Done'; // i change the button text
            } else {
                newTask.classList.add('done');
                doneButton.textContent = 'Undone'; // i change the button text to undone i want to change it
            }
        });

        // create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px'; // add some spacing

        // add functionality to the delete button
        deleteButton.addEventListener('click',function(){
            taskList.removeChild(newTask); // remove the task from the list
        });

        // append the buttons
        newTask.appendChild(doneButton);
        newTask.appendChild(deleteButton);

        //add the task to the list
        taskList.appendChild(newTask);
        taskInput.value = ''; // clear the input box
        errorMessage.style.display = 'none'; // hide erro message
    } else {
        // show error message
        errorMessage.textContent = 'Please enter a task before adding!';
        errorMessage.style.display = 'block';
    }
});