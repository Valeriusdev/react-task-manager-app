import styles from './Task.module.css'

const Task = ({ task, index, deleteTask }) => {
  return (
    <div className={styles.task} onDoubleClick={() => deleteTask(index)}>
      <div className={styles.taskText}>{task}</div>
    </div>
  )
}

export default Task