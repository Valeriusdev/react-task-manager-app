import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Task.module.css'

const Task = ({ task, deleteTask }) => {
  return (
    <div className={styles.task} onDoubleClick={() => deleteTask(task.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.taskText}>{task.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  )
}

export default Task