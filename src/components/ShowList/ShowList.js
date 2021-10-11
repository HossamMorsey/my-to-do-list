import React from "react";
import "./ShowList.scss";

const ShowList = ({ tasksList }) => {
  const showingTasksList = tasksList.map((task, index) => {
    return (
      <span className="list-item">
        {" "}
        {index + 1} {task}
      </span>
    );
  });
  return (
    <div>
      <h3> To-Do List</h3>
      <div className="list-container">{showingTasksList}</div>
    </div>
  );
};

export default ShowList;
