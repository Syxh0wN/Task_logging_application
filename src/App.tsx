import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Task } from "./components/Tasks/Task";
import "./styled/global.css";

export function App() {
  return (
    <div>
      <Header />
      <Search />
      <Task />
    </div>
  );
}
