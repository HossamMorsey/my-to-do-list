import React from "react";
import "./DoneList.scss";

const DoneList = ({ doneList }) => {
  const showingDoneList = doneList.map((task, index) => {
    return (
      <>
        <tr>
          <td className="numbering">{index + 1}</td>
          <td className="single-task">{task}</td>
        </tr>
      </>
    );
  });
  return (
    <div className="done-list-container">
      <table className="done-tasks">
        <tr>
          <th>#</th>
          <th>Done Tasks</th>
        </tr>
        {showingDoneList}
      </table>
    </div>
  );
};

export default DoneList;
