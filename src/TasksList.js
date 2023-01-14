import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { todoContext } from "./hooks/useContext";

function TasksList(props) {
  const { tasks, toggleTask, deleteTask } = React.useContext(todoContext);
  const handleDelete = (taskTitle) => {
    deleteTask(taskTitle)
  }
  return (
    <div className="lista">
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.title}>
              <div className="listItem">
                <input
                  type="checkbox"
                  value={task.title}
                  onChange={(e) => toggleTask(e.target.value)}
                  checked={task.completed}
                />{" "}
                {task.title} {task.date}
                <button className="deleteButton"
                    onClick={() => handleDelete(task.title)}>
                  <RiDeleteBin5Fill />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { TasksList };
