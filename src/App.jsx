import TaskForm from './components/Tasks/TaskForm'
import TaskList from './components/Tasks/TaskList'
import './App.css'

const App = () => {
  return (
    <div>
      <h1> Task Manager </h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
