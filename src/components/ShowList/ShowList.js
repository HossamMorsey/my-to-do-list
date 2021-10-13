import React from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./ShowList.scss";

const ShowList = ({ tasksList }) => {
  const showingTasksList = tasksList.map((task, index) => {
    return (
      <>
        <tr>
          <td className="numbering">{index + 1}</td>
          <td className="single-task">{task}</td>
          <td className="check-box">
            <Checkbox className="checkbox" />
          </td>
          <td className="delete">
            <Button icon={<DeleteOutlined />} />
          </td>
        </tr>
      </>
    );
  });
  return (
    <div className="show-list-container">
      <table className="todo-tasks">
        <tr>
          <th>#</th>
          <th>To-Do Tasks</th>
          <th>Done !!</th>
          <th> Delete</th>
        </tr>
        {showingTasksList}
      </table>
    </div>
  );
};

export default ShowList;
