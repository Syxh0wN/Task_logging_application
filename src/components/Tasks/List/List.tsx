import style from "./List.module.css";

import svgcompleted from "../../../assets/task/complete.svg";
import incompleted from "../../../assets/task/incomplete.svg";
import trash from "../../../assets/task/trash.svg";

interface iTask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface iListProps {
  task: iTask;
  onDelete: (tId: number) => void;
  onChange: (tId: number) => void;
}

export const List = (props: iListProps) => {
  return (
    <li
      className={`${props.task.completed ? style.completed : ""} ${
        style.listItem
      }`}
      id={props.task.id.toString()}
    >
      <button onClick={() => console.log(`Change task ${props.task.id}`)}>
        {props.task.completed ? (
          <img src={svgcompleted} alt="Tarefa concluída" />
        ) : (
          <img src={incompleted} alt="Tarefa não concluída" />
        )}
      </button>

      <div className = {style.title}>
        <strong>{props.task.title}</strong>
      </div>

      <div className = {style.descriptionAndDelete}>
        <div>
          <span>{props.task.description}</span>
        </div>
        <div>
          <button onClick={() => console.log(`Delete task ${props.task.id}`)}>
            <img src={trash} alt="delete task" />
          </button>
        </div>
      </div>
    </li>
  );
};
