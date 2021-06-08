import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Row, Col } from "react-flexbox-grid";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const data = {
  datasets: [
    {
      data: [45, 24, 30],
      backgroundColor: ["purple ", "#5296ff", "red"],
      borderColor: ["purple", "#5296ff", "red"],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <div class="border border-dark rounded">
    <Row className="paddingClass">
      <Col xs={9}>
        <p className="fontSizeReduce"> Open positions by Department </p>
      </Col>
      <Col xs={2}>
        {" "}
        <BiDotsHorizontalRounded />{" "}
      </Col>
    </Row>

    <div
      className="paddingRow_2"
      style={{
        position: "relative",
        margin: "auto",
        width: "10.5vw",
      }}
    >
      {" "}
      <Doughnut data={data} />
    </div>
  </div>
);

export default DoughnutChart;
