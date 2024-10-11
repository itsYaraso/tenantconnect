import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import TaskBox from "./components/TaskBox";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="">
      <Header />
      <div className="flex">
      <NavMenu />
      <TaskList />
      </div>
    </div>
  );
}
