import React from "react";

function Status({completedTasks, totalTasks}) {
  return <div className="status">You have completed {completedTasks} of {totalTasks} tasks</div>;
}

export { Status };
