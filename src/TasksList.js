import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

function TasksList(props) {
  const { tasks } = props;
  return (
    <div className="lista">
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.title}>
              <div className="listItem">
                <input
                  checked={task.completed}
                  type="checkbox"
                  onclick="return false;"
                />{" "}
                {task.title} {task.date}
                <div className="deleteButton">
                  <RiDeleteBin5Fill />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { TasksList };
