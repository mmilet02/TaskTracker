import Task from "./Task";

function Tasks({ tasks, deleteTask, toggleReminder }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
}

export default Tasks;
