const TaskModel = require('./model');
const TaskView = require('./view');
const TaskController = require('./controller');

// Instanciar los componentes del MVC
const model = new TaskModel();
const view = new TaskView();
const app = new TaskController(model, view);

// Ejecución inicial
app.showTasks();

// Simular que el usuario agrega una nueva tarea después de 3 segundos
setTimeout(() => {
  app.createNewTask('Dominar los comandos de Git y GitHub');
}, 3000);