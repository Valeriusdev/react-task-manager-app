import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri"
import Button from "../../UI/Button"

const TasksActions = () => {
  return (
    <>
        <Button><RiRefreshLine /></Button>
        <Button><RiDeleteBin2Line /></Button>
    </>
  )
}

export default TasksActions