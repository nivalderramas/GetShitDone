import React from "react";
import { Header } from "./Header";
import { Status } from "./Status";
import { TasksList } from "./TasksList";
import { CreateTask } from "./CreateTask";
import { SearchBar } from "./SearchBar";
import "./css/getShitDone.css";

const defaultTasks = [
  //array containing objects of 5 sample tasks
  { title: "Do the laundry", completed: true, date: "2021-01-01" },
  { title: "Take out the trash", completed: false, date: "2021-02-01" },
  { title: "Clean the bathroom", completed: true, date: "2021-04-02" },
  { title: "Watch Netflix", completed: true, date: "2021-02-01" },
  { title: "Wash the dishes", completed: false, date: "2021-01-01" },
];

function GetShitDone() {

  const [searchValue, setSearchValue] = React.useState('');
  const [tasks, setTasks] = React.useState(defaultTasks);
  const [completedTasks, setCompletedTasks] = React.useState([]);
  const [searchedTasks, setSearchedTasks] = React.useState([]);

  React.useEffect(()=>{
    setCompletedTasks(tasks.filter(task => task.completed));
  },[tasks]);

  React.useEffect(()=>{
    if(searchValue.length < 1){
      setSearchedTasks(tasks);
    }
    else{
      setSearchedTasks(tasks.filter(task => {
        const searchText = searchValue.toLowerCase();
        const taskText = task.title.toLocaleLowerCase();
        return taskText.includes(searchText);
      }));
    }
  },[searchValue, tasks]);

  const toggleTask = (title) => {
    const taskIdx = tasks.findIndex(task => task.title == title);
    let newTasks = [...tasks];
    newTasks[taskIdx].completed = !newTasks[taskIdx].completed;
    setTasks(newTasks);
  };

  const deleteTask = (title) => {
    const taskIdx = tasks.findIndex(task => task.title == title);
    let newTasks = [...tasks];
    newTasks.splice(taskIdx,1);
    setTasks(newTasks);
  }

  return (
    <div className="main">
      <Header />
      <Status completedTasks={completedTasks.length}
              totalTasks={tasks.length}
      />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TasksList tasks={searchedTasks} toggleTodo={toggleTask}  deleteTask={deleteTask}/>
      <CreateTask />
    </div>
  );
}

export { GetShitDone };
