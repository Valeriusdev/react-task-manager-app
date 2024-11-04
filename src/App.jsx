import { useState } from 'react'
import TaskForm from './components/Tasks/TaskForm'
import TaskList from './components/Tasks/TaskList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTaskHandler = (text) => {
    setTasks([...tasks, text])
  }

  const deleteTaskHandler = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index))
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
