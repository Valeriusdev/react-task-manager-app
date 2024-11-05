import styles from './Task.module.css'
import { RiTodoFill } from 'react-icons/ri'

const Task = ({ task, index, deleteTask }) => {
  return (
    <div className={styles.task} onDoubleClick={() => deleteTask(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.taskText}>{task}</div>
    </div>
  )
}

export default Task