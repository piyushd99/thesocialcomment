import React from "react";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
import Button from "react-bootstrap/Button";
import SearchField from "react-search-field";
const DashNav = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#800080", "#ffa2ff"],
        borderColor: ["#800080", "#ffa2ff"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Row className="paddingCol2">
        <Col xs={4}>
          <Row>
            <h2>Dashboard</h2>
          </Row>
          <Row>
            <p>Monday,</p>&nbsp;
            <p className="date">02 July 2020</p>
          </Row>
        </Col>
        <Col xs={3}></Col>
        <Col xs={1}>
          <Button variant="primary">+ Add</Button>{" "}
        </Col>
        <Col xs={4}>
          <SearchField placeholder="Search item" />
        </Col>
      </Row>
    </div>
  );
};

export default DashNav;
