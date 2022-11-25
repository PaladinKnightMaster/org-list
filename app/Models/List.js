import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"



export class List {

  constructor(data) {

    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color


  }
  // TODO ask TA how to style better with bootstrap and what went wrong here.
  get Template() {
    return /*html*/ `

        <div class="card p-0 d-flex justify-content-center  " style="width: 18rem;">
  <div class="card-body rounded-top" style="background-color :${this.color}" >
   <i onclick="app.listsController.removeCard('${this.id}')"class="mdi mdi-close selectable text-danger" title = "Remove list"></i>
 <label for="tasks" class="col-form-label d-flex flex-column flex-nowrap justify-content-center align-items-center text-light text-shadow ">
    <h5 class="card-title  m-2 text-shadow">${this.name} </h5>
    <p>${this.uncompletedTasks.length}/${this.Tasks.length}</p>
   </label>
  </div>
  <div class="card-body">
    <div class="row g-3 align-items-center">
      <div class="col-auto">
        <ul id="tasks"> ${this.TasksTemplate} </ul>
      </div>
      <div class="col-auto d-flex ">
        <form onsubmit="app.tasksController.createTask('${this.id}')" class="d-flex justify-content-center" ><button class="btn" type="submit"><i class="mdi mdi-plus text-light " title ="add Task"></i></button>
          <input type="text" class="task-input " name="items" placeholder="add task" required minlength="3">
      </div>
      </form>
    </div>
  </div>
</div>








`
  }


  get TasksTemplate() {
    let template = ''
    let tasks = appState.tasks.filter(t => t.listsId == this.id)
    tasks.forEach(t => template += t.Template)
    console.log('task added')
    return template
  }

  get Tasks() {
    let tasks = appState.tasks.filter(task => task.listsId == this.id)

    return tasks
  }


  get uncompletedTasks() {
    let tasks = this.Tasks.filter(task => task.done == true)
    console.log(this.Tasks)
    return tasks
  }







}

