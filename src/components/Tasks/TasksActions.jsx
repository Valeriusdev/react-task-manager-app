import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";
import Button from "../../UI/Button";
import styles from "./TasksActions.module.css";

const TasksActions = ({
  resetTasks,
  deleteCompletedTasks,
  completedTasksExist,
}) => {
  return (
    <div className={styles.tasksActionsContainer}>
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
    </div>
  );
};

export default TasksActions;
