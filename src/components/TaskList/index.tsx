import style from "./TaskList.module.css";
import clipboard from "../../assets/task/Clipboard.svg";
import { ListItem } from "../ListItem";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

type TaskListProps = {
  tasks: Task[];
  onDeleteTask?: (tId: number) => void;
  onChangeTask?: (tId: number) => void;
};

export const TaskList = ({
  tasks,
  onDeleteTask,
  onChangeTask,
}: TaskListProps) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  return (
    <section className={style.taskContainerCenter}>
      <div className={style.taskContainer}>
        <div className={style.taskHeader}>
          <div>
            <span className={style.created}>Tarefas criadas</span>
            <div>
              <strong>{totalTasks}</strong>
            </div>
          </div>

          <div>
            <span className={style.completed}>Concluídas</span>
            <div>
              <strong>{completedTasks}</strong>
            </div>
          </div>
        </div>

        {totalTasks === 0 ? (
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
        ) : (
          <ul>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onChangeTask={onChangeTask}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
