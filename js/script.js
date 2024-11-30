document.getElementById('add-task-button').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
    
      // create a new task (list item)
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

      // create the "Done" button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.style.marginLeft = '10px'; // Add some spacing

      // add functionality to the "Done" button
        doneButton.addEventListener('click', function () {
        if (newTask.style.textDecoration === 'line-through') {
          newTask.style.textDecoration = 'none'; // mark as not done
        } else {
          newTask.style.textDecoration = 'line-through'; // mark as done
        }
    });

      // append the button to the task
    newTask.appendChild(doneButton);

      // add the task to the list
    taskList.appendChild(newTask);
      taskInput.value = ''; // clear the input box
    } else {
    alert('Please enter a task before adding!');
    }
});

