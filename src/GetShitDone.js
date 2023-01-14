import React from "react";
import { Header } from "./Header";
import { Status } from "./Status";
import { TasksList } from "./TasksList";
import { CreateTask } from "./CreateTask";
import { SearchBar } from "./SearchBar";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { todoContext } from "./hooks/useContext";
import "./css/getShitDone.css";

function GetShitDone() {
  const [searchValue, setSearchValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const {
    item: tasks,
    setItemValue: setTasks,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", [{ title: "Eat", completed: false}]);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [searchedTasks, setSearchedTasks] = React.useState([]);

  React.useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed));
  }, [tasks]);

  React.useEffect(() => {
    if (searchValue.length < 1) {
      setSearchedTasks(tasks);
    } else {
      setSearchedTasks(
        tasks.filter((task) => {
          const searchText = searchValue.toLowerCase();
          const taskText = task.title.toLocaleLowerCase();
          return taskText.includes(searchText);
        })
      );
    }
  }, [searchValue, tasks]);

  const toggleTask = (title) => {
    const taskIdx = tasks.findIndex((task) => task.title === title);
    let newTasks = [...tasks];
    newTasks[taskIdx].completed = !newTasks[taskIdx].completed;
    setTasks(newTasks);
  };

  const deleteTask = (title) => {
    const taskIdx = tasks.findIndex((task) => task.title === title);
    let newTasks = [...tasks];
    newTasks.splice(taskIdx, 1);
    setTasks(newTasks);
  };

  const addTask = (title) => {
    let newTasks = [...tasks,{title, completed: false}];
    setTasks(newTasks);
  };

  return (
    <div className="main">
      <todoContext.Provider value={{searchedTasks, toggleTask, deleteTask, showModal, setShowModal, addTask}}>
        <Header />
        <Status
          completedTasks={completedTasks.length}
          totalTasks={tasks.length}
          error={error}
          loading={loading}
        />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <CreateTask/>
        <TasksList/>
      </todoContext.Provider>
    </div>
  );
}

export { GetShitDone };
