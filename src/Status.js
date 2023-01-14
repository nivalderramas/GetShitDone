import React from "react";

function Status({ completedTasks, totalTasks, error, loading }) {
  return (
    <>
      {!error && !loading && (
        <div className="status">
          You have completed {completedTasks} of {totalTasks} tasks
        </div>
      )}
    </>
  );
}

export { Status };
