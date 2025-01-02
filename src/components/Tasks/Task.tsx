import style from "./Task.module.css";
import clipboard from "../../assets/task/Clipboard.svg";
import { List } from "./List/List";
import { useState } from "react";


interface iTask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const Task = () => {

  const [task, setTask] = useState<iTask[]>([]);

  const totalTasks = task.length;
  const completedTasks = task.filter((t) => t.completed).length;

  const handleDeleteTask = (tId: number) => {
    console.log(`Deleting task with ID: ${tId}`);
    
  };

  const handleChangeTask = (tId: number) => {
    console.log(`Changing task with ID: ${tId}`);
  };

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
            {task.map((t) => (
              <List key={t.id} task={t} onDelete={handleDeleteTask} onChange={handleChangeTask}/>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};