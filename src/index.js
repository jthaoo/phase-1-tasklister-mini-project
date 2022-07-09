document.addEventListener("DOMContentLoaded", () => {
  
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit)
  
  
  });
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted')
   console.log (event.target.description.value)
  
  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target.description.value;
  taskList.append(task);
  
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'X'
  deleteButton.addEventListener('click' , () => {
    taskList.removeChild(task);
  });
  
  
  task.append(deleteButton)
  
  event.target.reset();
  
  
  }