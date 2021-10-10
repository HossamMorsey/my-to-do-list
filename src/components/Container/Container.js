// libraries imports
import React from "react";
import { Row, Col, Divider } from "antd";
// components imports
import AddToList from "../AddToDo";
import ShowList from "../ShowList";
import DoneList from "../DoneList";
import { mainIcon2 } from "../../utils/utlis";
import "./Container.scss";

const Container = () => {
  return (
    <div>
      <Row className="header-row">
        <img src={mainIcon2} alt="Main Icon" className="main-icon" />
      </Row>

      <Divider />

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className="first-row-section"
      >
        <Col className="add-to-do">
          <AddToList />
        </Col>
        <Col className="show-list" style={{ backgroundColor: "brown" }}>
          <ShowList />
        </Col>
      </Row>

      <DoneList />
    </div>
  );
};

export default Container;
