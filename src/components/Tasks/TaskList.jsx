import Task from "./Task"
import styles from "./TaskList.module.css"

const TaskList = ({tasks}) => {
  return (
    <div className={styles.taskListContainer}>
      {!tasks.length && <h2>Task List is empty</h2>}
      {tasks.map((task, index) => <Task key={index} task={task} />)}
    </div>
  )
}

export default TaskList