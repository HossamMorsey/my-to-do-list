import React, { useState } from "react";
import { Input, Button } from "antd";
import { ClearOutlined, PlusOutlined } from "@ant-design/icons";
import "./AddToDo.scss";

const AddToDo = ({ tasks, setTasks }) => {
  //Define Local state to get each task separately
  const [state, setState] = useState({
    toDoTask: "",
  });

  // Get text from input area and add it to state
  const onChangeText = (e) => {
    setState({
      ...state,
      toDoTask: e.target.value,
    });
  };

  // Handle clearing text area after adding a task or to remove what was written
  const handleClearTextArea = () => {
    setState({
      ...state,
      toDoTask: "",
    });
  };

  // Handle adding single task from input field then add it to array of tasks
  // after that clear the text field
  const handleAddTask = (e) => {
    setState({
      ...state,
      toDoTask: e.target.value,
    });
    addTaskToList();
    handleClearTextArea();
  };

  // Handle adding single task to tasks array 
  const addTaskToList = () => {
    tasks.push(state.toDoTask);
    setTasks(tasks)
  };

  // returning the design that should be shown on web page
  return (
    <div className="add-todo-text">
      <Input
        onChange={onChangeText}
        onPressEnter={handleAddTask}
        placeholder="Add your Task"
        value={state.toDoTask}
      />
      <Button onClick={handleClearTextArea} icon={<ClearOutlined />} />
      <Button onClick={handleAddTask} icon={<PlusOutlined />} />
    </div>
  );
};

export default AddToDo;
