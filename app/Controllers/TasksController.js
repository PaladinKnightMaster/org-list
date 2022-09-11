import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"





export class TasksController {
  constructor() {

  }
  createTask(listsId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newTask = getFormData(form)
      // @ts-ignore
      newTask.listsId = listsId
      tasksService.createTask(newTask)
    } catch (error) {
      console.log(error);
    }
  }

  removeTask(tasksId) {
    if (window.confirm('Do you want to remove this task?🤔')) {

      console.log('item removed', tasksId)
      try {
        tasksService.removeTask(tasksId)
      } catch (error) {
        console.log(error);

      }
    }
  }

  taskChecked(id) {
    tasksService.taskChecked(id)

  }



}