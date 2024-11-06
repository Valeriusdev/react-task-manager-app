import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from './components/Tasks/TaskForm'
import TaskList from './components/Tasks/TaskList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTaskHandler = (text) => {
    const newTask = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTasks([...tasks, newTask])
  }

  const deleteTaskHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }  

  return (
    <div className="App">
      <h1> Task Manager </h1>
      <TaskForm addTask={addTaskHandler} />
      <TaskList tasks={tasks} deleteTask={deleteTaskHandler} />
    </div>
  )
}

export default App
