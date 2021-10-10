// libraries imports
import React from "react";
import { Button, Row } from "antd";
// components imports
import AddToList from "../AddToDo";
import ShowList from "../ShowList";
import DoneList from "../DoneList";
import "./Container.scss";

const Container = () => {
  return (
    <>
      <Row className="header-text">
        Hey There ! It's the container Component
      </Row>
      <Button> Hey there ! </Button>
      <div className="first-part-container">
        <AddToList />
        <DoneList />
      </div>

      <ShowList />
    </>
  );
};

export default Container;
