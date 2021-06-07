import React from "react";
import "../App.css";
import image from "./PngItem_1337233.png";
import { Row, Col } from "react-flexbox-grid";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
const RightPanel = () => (
  <div class="border border-dark rounded">
    <div className="paddingClass ">
      <div className="container">
        <p>Hello John Bayer,</p>
        <p>You have 8 New Appliactions Today!</p>
        <img src={image} alt="Logo" className="image" />
      </div>
      <div className="paddingCol3">
        <div>
          <Row>
            <Col xs={2}>
              <h2>
                <BiUserCircle />
              </h2>
            </Col>
            <Col xs={6}>
              <Row>
                <p>Rosie Metts</p>
              </Row>
              <Row>
                <p className="reduceSize">Applied </p>&nbsp;
                <p className="date reduceSize"> asdjfuh</p>
              </Row>
            </Col>
            <Col xs={2}>
              <h5>
                <AiOutlineMessage />
              </h5>
            </Col>
            <Col xs={2}>
              <h5>
                <IoMdCall />
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <h2>
                <BiUserCircle />
              </h2>
            </Col>
            <Col xs={6}>
              <Row>
                <p>James Scott</p>
              </Row>
              <Row>
                <p className="reduceSize">Applied </p>&nbsp;
                <p className="date reduceSize"> asdjfuh</p>
              </Row>
            </Col>
            <Col xs={2}>
              <h5>
                <AiOutlineMessage />
              </h5>
            </Col>
            <Col xs={2}>
              <h5>
                <IoMdCall />
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <h2>
                <BiUserCircle />
              </h2>
            </Col>
            <Col xs={6}>
              <Row>
                <p>Jamie Laurenson</p>
              </Row>
              <Row>
                <p className="reduceSize">Applied </p>&nbsp;
                <p className="date reduceSize"> asdjfuh</p>
              </Row>
            </Col>
            <Col xs={2}>
              <h5>
                <AiOutlineMessage />
              </h5>
            </Col>
            <Col xs={2}>
              <h5>
                <IoMdCall />
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <h2>
                <BiUserCircle />
              </h2>
            </Col>
            <Col xs={6}>
              <Row>
                <p>Elizabeth Hurton</p>
              </Row>
              <Row>
                <p className="reduceSize">Applied </p>&nbsp;
                <p className="date reduceSize"> asdjfuh</p>
              </Row>
            </Col>
            <Col xs={2}>
              <h5>
                <AiOutlineMessage />
              </h5>
            </Col>
            <Col xs={2}>
              <h5>
                <IoMdCall />
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <h2>
                <BiUserCircle />
              </h2>
            </Col>
            <Col xs={6}>
              <Row>
                <p>Danny Watson</p>
              </Row>
              <Row>
                <p className="reduceSize">Applied </p>&nbsp;
                <p className="date reduceSize"> asdjfuh</p>
              </Row>
            </Col>
            <Col xs={2}>
              <h5>
                <AiOutlineMessage />
              </h5>
            </Col>
            <Col xs={2}>
              <h5>
                <IoMdCall />
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <h2>
                <BiUserCircle />
              </h2>
            </Col>
            <Col xs={6}>
              <Row>
                <p>reha Scarlett</p>
              </Row>
              <Row>
                <p className="reduceSize">Applied </p>&nbsp;
                <p className="date reduceSize"> asdjfuh</p>
              </Row>
            </Col>
            <Col xs={2}>
              <h5>
                <AiOutlineMessage />
              </h5>
            </Col>
            <Col xs={2}>
              <h5>
                <IoMdCall />
              </h5>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
);

export default RightPanel;
