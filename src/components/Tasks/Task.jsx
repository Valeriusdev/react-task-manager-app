import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Task.module.css'

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className={`${styles.task} ${task.isCompleted ? styles.completedTask : ""}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.taskText}>{task.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTask(task.id)} />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTask(task.id)} />
    </div>
  )
}

export default Task