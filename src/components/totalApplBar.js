import React from "react";
import { Row, Col } from "react-flexbox-grid";

import { GoPrimitiveDot } from "react-icons/go";
import ProgressBar from "react-bootstrap/ProgressBar";
const data = {
  labels: ["Application", "Selected", "Rejected", "On hold", "Processed"],
  datasets: [
    {
      label: "label",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["white", "rgba(82,150,255)", "red", "white", "#800080"],
      borderColor: [
        "rgba(0, 0, 0, 1)",
        "rgba(82,150,255)",
        "red",
        "white",
        "#800080",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1.5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const HorizontalBarChart = () => (
  <div class="border border-dark rounded">
    <div className="paddingClass">
      <h4>Total Application</h4>
      <br />
      <div className="paddingRow_2">
        <Row>
          <Col xs={4} className="greencolor">
            <p>
              <GoPrimitiveDot />
              Application
            </p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={5}>
            <ProgressBar variant="success" now={45} />
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="bluecolor2">
            <p>
              <GoPrimitiveDot />
              Shotlisted
            </p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={5}>
            <ProgressBar variant="info" now={85} />
          </Col>
        </Row>
        <Row className="redcolor">
          <Col xs={4}>
            <p>
              <GoPrimitiveDot />
              Rejected
            </p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={5}>
            <ProgressBar now={40} variant="danger" />
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="greencolor">
            <p>
              <GoPrimitiveDot />
              On hold
            </p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={5}>
            <ProgressBar variant="success" now={10} />
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="yellowcolor">
            <p>
              <GoPrimitiveDot />
              Selected
            </p>
          </Col>
          <Col xs={1}></Col>
          <Col xs={5}>
            <ProgressBar variant="warning" now={90} />
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default HorizontalBarChart;
