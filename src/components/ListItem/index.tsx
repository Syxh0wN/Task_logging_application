import style from "./ListItem.module.css";

import svgcompleted from "../../assets/task/complete.svg";
import incompleted from "../../assets/task/incomplete.svg";
import trash from "../../assets/task/trash.svg";
import { Task } from "../../pages/Home/types";

type ListProps = {
  task: Task;
  onDeleteTask?: (tId: number) => void;
  onChangeTask?: (tId: number) => void;
};

export const ListItem = ({ task, onDeleteTask, onChangeTask }: ListProps) => {
  return (
    <li
      className={`${task.completed ? style.completed : ""} ${style.listItem}`}
      id={task.id.toString()}
    >
      <button onClick={() => onChangeTask?.(task.id)}>
        {task.completed ? (
          <img src={svgcompleted} alt="Tarefa concluída" />
        ) : (
          <img src={incompleted} alt="Tarefa não concluída" />
        )}
      </button>

      <div className={style.descriptionAndDelete}>
        <div>
          <span>{task.description}</span>
        </div>
        <div>
          <button onClick={() => onDeleteTask?.(task.id)}>
            <img src={trash} alt="delete task" />
          </button>
        </div>
      </div>
    </li>
  );
};
