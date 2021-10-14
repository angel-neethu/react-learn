import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";

const TaskPage = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Apointment",
      day: "Sep 28 1:20 pm",
      reminder: false,
    },
    { id: 2, text: "Meeting at school", day: "Dec 28 4:00 pm", reminder: true },
    { id: 3, text: "Food Shooping", day: "Jan 28 4:00 pm", reminder: true },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle remainder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add tAsk

  const addTask = (task) => {
    console.log(task);

    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        tittle="Task Tracker"
        value={1}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
};

export default TaskPage;
