
class TaskView {
  render(tasks) {
    console.clear();
    console.log("=== 📋 MI LISTA DE TAREAS (MVC) ===");
    if (tasks.length === 0) {
      console.log("No hay tareas pendientes.");
    } else {
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. [ ] ${task}`);
      });
    }
    console.log("===================================\n");
  }
}

module.exports = TaskView;