// libraries imports
import React, { useState } from "react";
import { Row, Col } from "antd";
// Components imports
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
    doneTasks: [],
    listsSectionVisible: false,
  });

  // Set tasks that have been added in add toDo component
  const setTasks = (tasks) => {
    setState({
      ...state,
      listOfTasks: tasks,
    });
  };
  const setTableVisible = (vis) => {
    setState({
      ...state,
      listsSectionVisible: vis,
    });
  };
  const setDoneTasks = (tasks) => {
    setState({
      ...state,
      doneTasks: tasks,
    });
  };
  // console.log("state", state.doneTasks)

  return (
    <div style={{ width: "98%" }}>
      <Row className="header-row">
        <img src={mainIcon2} alt="Main Icon" className="main-icon" />
      </Row>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="first-row-section"
      >
        <Col className="add-to-do">
          <AddToList
            tasks={state.listOfTasks}
            setTasks={setTasks}
            setTableVisible={setTableVisible}
          />
        </Col>
      </Row>
      {state.listsSectionVisible && (
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className="second-row-section"
        >
          <Col className="show-list">
            <ShowList
              tasksList={state.listOfTasks}
              doneTasks={state.doneTasks}
              setDoneTasks={setDoneTasks}
              setTableVisible={setTableVisible}
            />
          </Col>
          <Col className="done-list">
            <DoneList doneList={state.doneTasks} />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Container;
