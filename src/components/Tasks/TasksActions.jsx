import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
import Button from "../../UI/Button";

const TasksActions = ({
  resetTasks,
  deleteCompletedTasks,
  completedTasksExist,
}) => {
  return (
    <>
      <Button title="Reset Tasks" onClick={resetTasks}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Tasks"
        onClick={deleteCompletedTasks}
        disabled={!completedTasksExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
};

export default TasksActions;
