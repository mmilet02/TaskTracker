import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Baci smece",
      day: "08.09.2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Pregled za oko",
      day: "08.09.2021",
      reminder: true,
    },
    {
      id: 3,
      text: "Sastanak obavezno",
      day: "09.09.2021",
      reminder: false,
    },
  ]);

  // Add task
  const addTask = (task) => {
    console.log(task);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header></Header>
      <AddTask addTask={addTask}></AddTask>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        ></Tasks>
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
