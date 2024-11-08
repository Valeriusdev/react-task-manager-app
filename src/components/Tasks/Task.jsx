import styles from './Task.module.css'
import { RiTodoFill } from 'react-icons/ri'

const Task = ({ task, deleteTask }) => {
  return (
    <div className={styles.task} onDoubleClick={() => deleteTask(task.id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.taskText}>{task.text}</div>
    </div>
  )
}

export default Task