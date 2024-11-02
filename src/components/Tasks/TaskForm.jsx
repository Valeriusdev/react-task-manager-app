import { useState } from "react"
import styles from "./TaskForm.module.css"

const TaskForm = ({ addTask }) => {
  const[text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTask(text)
    setText('')
  } 

  return (
    <div className={styles.taskFormContainer}>
      <form onSubmit={onSubmitHandler}>
          <input 
            placeholder="Enter new task"
            value={text}
            onChange={(e) => setText(e.target.value)} 
          />
          <button type="submit"> Submit </button>
      </form>
    </div>
  )
}

export default TaskForm