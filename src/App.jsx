import { useState } from 'react'
import TaskForm from './components/Tasks/TaskForm'
import TaskList from './components/Tasks/TaskList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <h1> Task Manager </h1>
      <TaskForm />
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
