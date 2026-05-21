class TaskModel {
  constructor() {
    this.tasks = [
      'Aprender Git',
      'Configurar arquitectura MVC',
      'Crear rutas en Express',
      'Conectar base de datos MongoDB',
      'Implementar autenticación de usuarios',
      'Diseñar vistas con EJS',
      'Crear API REST para tareas',
      'Desplegar proyecto en Render'
    ];
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