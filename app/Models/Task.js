import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.items = data.items
    this.listsId = data.listsId
    this.done = data.done || false
  }

  get Template() {
    return /*html*/`
    <div class="d-flex justify content-between align-items-baseline border">
  <div class="form-check">
    <input onchange=" app.tasksController.taskChecked('${this.id}')" ${this.done ? 'checked' : ''}
      class="form-check-input" type="checkbox" id="tasks">
    <label class="form-check-label" for="items">
      <span>${this.items}</span>
      <i onclick="app.tasksController.removeTask('${this.id}')" class="mdi mdi-close selectable"
        title="Remove Task's"></i> </p>
    </label>
  </div>
</div>


`
  }




}
