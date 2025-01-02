import style from "./Task.module.css";
import clipboard from "../../assets/task/Clipboard.svg";

export const Task = () => {
  return (
    <div className={style.taskContainerCenter}>
      <div className={style.taskContainer}>
        <div className={style.taskHeader}>
          <div>
            <span className={style.created}>Tarefas criadas</span>
            <div>
              <strong>0</strong>
            </div>
          </div>

          <div>
            <span className={style.completed}>Concluidas</span>
            <div>
              <strong>0</strong>
            </div>
          </div>
        </div>
        <div className={style.taskList}>
          <img src={clipboard} alt="clipboard" />

          <div>
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </div>
            <div>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};