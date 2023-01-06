import React from "react";
import { Header } from "./Header";
import { Status } from "./Status";
import { TasksList } from "./TasksList";
import { CreateTask } from "./CreateTask";
import { SearchBar } from "./SearchBar";
import "./css/getShitDone.css";

const tasks = [
  //array containing objects of 5 sample tasks
  { title: "Do the laundry", completed: true, date: "2021-01-01" },
  { title: "Take out the trash", completed: false, date: "2021-02-01" },
  { title: "Clean the bathroom", completed: false, date: "2021-04-02" },
  { title: "Watch Netflix", completed: true, date: "2021-02-01" },
  { title: "Wash the dishes", completed: false, date: "2021-01-01" },
];

function GetShitDone() {
  return (
    <div className="main">
      <Header />
      <Status />
      <SearchBar />
      <TasksList tasks={tasks} />
      <CreateTask />
    </div>
  );
}

export { GetShitDone };
