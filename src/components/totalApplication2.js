import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
import { BsArrowDownLeft } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const TotalApplication2 = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#ff0000", "#faa"],
        borderColor: ["#ff0000", "#faa"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div class="border border-dark rounded">
      <Row className="paddingClass">
        <Col xs={6}>
          <a>Total Application</a>
          <h2>1501</h2>
          <br />
          <h3 className="redcolor">
            <BsArrowDownLeft />
            -0.4%
          </h3>
        </Col>
        <Col xs={4}>
          <div
            style={{
              position: "relative",
              margin: "auto",
              width: "6vw",
            }}
          >
            {" "}
            <Doughnut data={data} />
          </div>
        </Col>
        <Col xs={1}>
          <BiDotsHorizontalRounded />
        </Col>
      </Row>
    </div>
  );
};

export default TotalApplication2;
