import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Task.module.css'

const Task = ({ task, deleteTask }) => {
  return (
    <div className={styles.task}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.taskText}>{task.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTask(task.id)} />
      <FaCheck className={styles.checkIcon} />
    </div>
  )
}

export default Task