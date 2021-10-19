import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./ShowList.scss";

const ShowList = ({ tasksList, doneTasks, setDoneTasks, setTableVisible }) => {
  const [state, setState] = useState({
    checked: false,
  });

  const handleDeleteTask = (index) => {
    tasksList.splice(index, 1);
    setState({
      ...state,
      checked: true,
    });
    if (tasksList.length === 0 && doneTasks.length === 0) {
      setTableVisible(false);
    }
  };

  const handleAddingDoneTask = (index) => {
    doneTasks.push(tasksList[index]);
    setDoneTasks(doneTasks);
    handleDeleteTask(index);
    setState({
      ...state,
      checked: true,
    });
  };
  const showingTasksList = tasksList.map((task, index) => {
    return (
      <>
        <tr>
          <td className="numbering">{index + 1}</td>
          <td className="single-task">{task}</td>
          <td className="check-box">
            <Checkbox
              onChange={() => handleAddingDoneTask(index)}
              className="checkbox"
            />
            <Button
              onClick={() => handleDeleteTask(index)}
              icon={<DeleteOutlined />}
            />
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
          <th>Options</th>
        </tr>
        {showingTasksList}
      </table>
    </div>
  );
};

export default ShowList;
