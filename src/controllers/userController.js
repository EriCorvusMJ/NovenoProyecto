class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  showTasks() {
    const tasks = this.model.getTasks();
    this.view.render(tasks);
  }

  createNewTask(taskName) {
    this.model.addTask(taskName);
    this.showTasks(); // Actualiza la vista con la nueva tarea
  }
}

module.exports = TaskController;