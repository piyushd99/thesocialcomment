import React from "react";
import TotalApplication from "./totalApplication";
import TotalApplication2 from "./totalApplication2";
import { Row, Col } from "react-flexbox-grid";
import ShortlistedCandidate from "./shortlistedCandidate";
import "../App.css";
import LineChart from "./lineChart";
import HorizontalBarChart from "./totalApplBar";
import Summary from "./Summary";
import DoughnutChart from "./doughnutChart";

const Dashboard = () => {
  return (
    <div class="container px-lg-5">
      <Row className="paddingRow">
        <Col xs>
          <TotalApplication />
        </Col>
        <Col xs>
          <ShortlistedCandidate />
        </Col>
        <Col xs>
          <TotalApplication2 />
        </Col>
      </Row>
      <Row className="paddingRow">
        <Col xs={8}>
          <div>
            <LineChart />
          </div>
        </Col>
        <Col xs={4}>
          <HorizontalBarChart />
        </Col>
      </Row>
      <Row className="paddingRow">
        <Col xs={8}>
          <Summary />
        </Col>
        <Col xs={4}>
          <DoughnutChart />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
