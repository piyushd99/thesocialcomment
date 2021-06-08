// import React from "react";
import { Line } from "react-chartjs-2";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../App.css";
import { Row, Col } from "react-flexbox-grid";
// const data = {
//   labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
//   datasets: [
//     {
//       label: "# of No Votes",
//       data: [1, 2, 1, 1, 2, 2],
//       fill: false,
//       backgroundColor: "rgb(54, 162, 235)",
//       borderColor: "rgba(54, 162, 235, 0.5)",
//     },
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       fill: true,
//       backgroundColor: "rgb(255, 99, 132,0.5)",
//       borderColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

// const options = {
//   scales: {
//     yAxes: [
//       {
//         type: "linear",
//         display: false,
//         position: "left",
//         id: "y-axis-1",
//       },
//     ],
//   },
// };

// const LineChart = () => (
// <div class="border border-dark rounded">
//   <Col>
// <Navbar variant="dark">
//   <Container>
//     <Navbar.Brand>Application Received</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link>This Year</Nav.Link>
//       <Nav.Link>This Week</Nav.Link>
//       <Nav.Link>Today</Nav.Link>
//       <Nav.Link>Download Report</Nav.Link>
//     </Nav>
//   </Container>
// </Navbar>
//   </Col>
//   <Col>
//     <div
//     // style={{
//     //   position: "relative",
//     //   margin: "auto",
//     //   width: "18vw",
//     // }}
//     >
//       <Line data={data} options={options} />
//     </div>
//   </Col>
// </div>
// );

// export default LineChart;
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: " A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: " B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: " E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: " F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: " G",
    uv: 3490,
    pv: 4300,
  },
];

export default function LineChart() {
  return (
    <div class="border border-dark rounded">
      <div className="paddingClass">
        <Row>
          <Navbar variant="dark">
            <Container>
              <Navbar.Brand>Application Received</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>This Year</Nav.Link>
                <Nav.Link>This Week</Nav.Link>
                <Nav.Link>Today</Nav.Link>
                <Nav.Link>Download Report</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <AreaChart
            width={650}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="white"
              fill="#E60000"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#E60000"
              fill="#E60000"
              fillOpacity={0.3}
            />
          </AreaChart>
        </Row>
      </div>
    </div>
  );
}
