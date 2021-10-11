// libraries imports
import React, { useState } from "react";
import { Row, Col } from "antd";
// components imports
import AddToList from "../AddToDo";
import ShowList from "../ShowList";
import DoneList from "../DoneList";
import { mainIcon2 } from "../../utils/utils";
import "./Container.scss";

const Container = () => {
  // Define array of tasks which will be responsible for adding tasks and will be passed to
  // Show list component to show the list if all tasks
  const [state, setState] = useState({
    listOfTasks: [],
  });

  // Set tasks that have been added in add toDo component
  const setTasks = (tasks) => {
    setState({
      ...state,
      listOfTasks: tasks,
    });
  };

  return (
    <div>
      <Row className="header-row">
        <img src={mainIcon2} alt="Main Icon" className="main-icon" />
      </Row>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="first-row-section"
      >
        <Col className="add-to-do">
          <AddToList tasks={state.listOfTasks} setTasks={setTasks} />
        </Col>
        <Col className="show-list" style={{ backgroundColor: "brown" }}>
          <ShowList tasksList={state.listOfTasks} />
        </Col>
      </Row>

      <DoneList />
    </div>
  );
};

export default Container;
