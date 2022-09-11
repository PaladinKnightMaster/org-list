import { ListsController } from "./Controllers/ListsController.js";
import { TasksController } from "./Controllers/TasksController.js";

class App {

  listsController = new ListsController()

  tasksController = new TasksController()

}

window["app"] = new App();
