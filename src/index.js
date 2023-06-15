document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
})
  // your code here
  function addingEventListeners() {
    document.getElementById("create-task-form").addEventListener("submit", handleFormSubmit)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    //console.log(e)
     const task = e.target["new-task-description"].value
     
     displayTask(task)
  }

  function displayTask(task) {
     const taskUl = document.getElementById("tasks")
     
     const taskLi = document.createElement("li")

     taskLi.textContent = task
     taskUl.appendChild(taskLi) 
  }