import "./App.css";
import React from "react";
import SideNav from "./components/sideNav";
import Dashboard from "./components/dashboard";
import RightPanel from "./components/rightPanel";
import { Row, Col } from "react-flexbox-grid";
import DashNav from "./components/dashNav";
const Apps = (props) => {
  return (
    <div>
      <Col xs>
        <Row>
          <Col xs={1}>
            <SideNav />
          </Col>
          <Col xs>
            <Row>
              <Col xs={12}>
                <DashNav />
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <Dashboard />
              </Col>
              <Col xs={3}>
                <RightPanel />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Apps;
