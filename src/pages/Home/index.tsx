import { useState } from "react";
import { AddTask } from "../../components/AddTask";
import { Header } from "../../components/Header";
import { TaskList } from "../../components/TaskList";
import { Task } from "./types";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask: Task = {
      id: newId,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const onDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const onChangeTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <Header />
      <AddTask onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onChangeTask={onChangeTask}
      />
    </>
  );
};

export default Home;
