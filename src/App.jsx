import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./components/Tasks/TaskForm";
import TaskList from "./components/Tasks/TaskList";
import TasksActions from "./components/Tasks/TasksActions";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (text) => {
    const newTask = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskHandler = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : { ...task };
      })
    );
  };

  const resetTasksHandler = () => {
    setTasks([]);
  };

  const deleteCompletedTasksHandler = () => {
    setTasks(tasks.filter((task) => !task.isCompleted));
  };

  return (
    <div className="App">
      <h1> Task Manager </h1>
      <TaskForm addTask={addTaskHandler} />
      <TasksActions
        resetTasks={resetTasksHandler}
        deleteCompletedTasks={deleteCompletedTasksHandler}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTaskHandler}
        toggleTask={toggleTaskHandler}
      />
    </div>
  );
};

export default App;
