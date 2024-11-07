import Task from "./Task"
import styles from "./TaskList.module.css"

const TaskList = ({tasks, deleteTask}) => {
  return (
    <div className={styles.taskListContainer}>
      {!tasks.length && <h2>Task List is empty</h2>}
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default TaskList