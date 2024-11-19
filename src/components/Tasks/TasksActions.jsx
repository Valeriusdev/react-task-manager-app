import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri"
import Button from "../../UI/Button"

const TasksActions = () => {
  return (
    <>
        <Button title="Reset Tasks"><RiRefreshLine /></Button>
        <Button title="Clear Completed Tasks"><RiDeleteBin2Line /></Button>
    </>
  )
}

export default TasksActions