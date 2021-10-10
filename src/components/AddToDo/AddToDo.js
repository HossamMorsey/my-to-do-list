import React, { useState } from "react";
import { Input, Button } from "antd";
import { ClearOutlined, PlusOutlined } from "@ant-design/icons";
import "./AddToDo.scss";

const AddToDo = () => {
  const [state, setState] = useState({
    toDoTask: "",
  });

  const onChangeText = (e) => {
    setState({
      ...state,
      toDoTask: e.target.value,
    });
  };

  const onPressEnter = (e) => {
    setState({
      ...state,
      toDoTask: e.target.value,
    });
  };

  const clearTextArea = () => {
    setState({
      ...state,
      toDoTask: "",
    });
  };

  return (
    <div className="add-todo-text">
      <Input
        onChange={onChangeText}
        onPressEnter={onPressEnter}
        placeholder="Add your Task"
        value={state.toDoTask}
      />
      <Button onClick={clearTextArea} icon={<ClearOutlined />} />
      <Button icon={<PlusOutlined />} />
    </div>
  );
};

export default AddToDo;
