import React from "react";
import { Doughnut } from "react-chartjs-2";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
import { BsArrowUpRight } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const ShortlistedCandidate = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["white", "#b4d6f6"],
        borderColor: ["#5296ff", "#b4d6f6"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div class="border border-dark rounded">
      <div className="blueBG ">
        <Row className="paddingClass">
          <Col xs={6}>
            <a>Shorlisted Candiate</a>
            <h2>4658</h2>
            <br />
            <h3>
              <BsArrowUpRight />
              +0.6%
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
    </div>
  );
};

export default ShortlistedCandidate;
