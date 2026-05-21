
class TaskModel {
  constructor() {
    this.tasks = ['Aprender Git', 'Configurar arquitectura MVC'];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    if (task) {
      this.tasks.push(task);
    }
  }
}

module.exports = TaskModel;
