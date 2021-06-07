import React from "react";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
import { FaLocationArrow } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
const Summary = () => (
  <div class="border border-dark rounded">
    <div className="paddingClass ">
      <Row>
        <Col xs={6}>
          <Row>
            <a>Referals and Campaign Stats</a>
          </Row>
          <br />
          <br />
        </Col>
        <Col xs={6}>
          <Row>
            <Col className="arrow redcolor ">
              <FaLocationArrow />
            </Col>
            <Col>
              <Row>
                <a className=" redcolor">40 Campaigns sent in total</a>
              </Row>
              <Row>
                <a>4 Campaigns sent in last month</a>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Row>
            <p className="textAlignCenter">User's Reached</p>
          </Row>
          <Row className="bluecolor">
            <BsArrowUpRight /> +3.59%
          </Row>
          <Row>
            <h4>7956</h4>
          </Row>
        </Col>

        <Col xs={3}>
          <Row>
            <p>Referals</p>
          </Row>
          <Row className="bluecolor">
            <BsArrowUpRight /> +9.09%
          </Row>
          <Row>
            <h4>0662</h4>
          </Row>
        </Col>
        <Col xs={3}>
          <Row>
            <p className="fontSizeReduce">Shares</p>
          </Row>
          <Row className="bluecolor">
            <BsArrowUpRight /> +29.18%
          </Row>
          <Row>
            <h4>1478</h4>
          </Row>
        </Col>
        <Col xs>
          <Row>
            <p className="fontSizeReduce">Application</p>
          </Row>
          <Row className="bluecolor">
            <BsArrowUpRight /> +12.0%
          </Row>
          <Row>
            <h4>0564</h4>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={5}>
          <Row>
            <Button variant="primary" size="sm" block>
              Start a New Campaign now
            </Button>
          </Row>
        </Col>
        <Col xs={1}></Col>
        <Col xs={5}>
          <Button variant="danger" className="button" size="sm" block>
            Pause All Running Campaign
          </Button>
        </Col>
      </Row>
    </div>
  </div>
);

export default Summary;
