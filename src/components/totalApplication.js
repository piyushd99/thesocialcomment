import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
import { BsArrowUpRight } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const TotalApplication = () => {
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
    <div class="border border-dark rounded">
      <Row className="paddingClass">
        <Col xs={6}>
          <a>Total Application</a>
          <h2>7956</h2>
          <br />
          <h3 className="purplecolor">
            <BsArrowUpRight />
            +3.59%
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

export default TotalApplication;
