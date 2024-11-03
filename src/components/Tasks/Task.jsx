import styles from './Task.module.css'

const Task = ({task}) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskText}>{task}</div>
    </div>
  )
}

export default Task