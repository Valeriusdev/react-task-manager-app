import Task from "./Task"

const TaskList = ({tasks}) => {
  return tasks.map((task, index) => <Task key={index} task={task} />)
}

export default TaskList