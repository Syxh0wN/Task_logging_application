import { Header } from "./components/Header/Header";
import { AddTask } from "./components/Adding/AddTask";
import { Task } from "./components/Tasks/Task";
import "./styled/global.css";

export function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <Task />
    </div>
  );
}
