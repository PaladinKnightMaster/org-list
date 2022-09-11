import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js";

class TasksService {


  removeTask(tasksId) {
    let tasks = appState.tasks.filter(t => t.id != tasksId);
    appState.tasks = tasks
    saveState('tasks', appState.tasks)

  }


  createTask(newTask) {
    let task = new Task(newTask)
    appState.tasks = [task, ...appState.tasks]
    saveState('tasks', appState.tasks)






  }
  taskChecked(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('bad ID')
    }
    task.done = !task.done
    appState.emit('tasks')
    saveState('tasks', appState.tasks,)

  }


}


export const tasksService = new TasksService