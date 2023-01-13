import React from "react";

function Status({ completedTasks, totalTasks, error, loading }) {
  return (
    <>
      {error && <div className="status">Error loading data</div>}
      {loading && <div className="status">Loading...</div>}
      {!error && !loading && (
        <div className="status">
          You have completed {completedTasks} of {totalTasks} tasks
        </div>
      )}
    </>
  );
}

export { Status };
