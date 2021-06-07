import React from "react";
import {
  FaCalendarCheck,
  FaChartBar,
  FaClipboard,
  FaCommentAlt,
  FaFolder,
  FaSignInAlt,
  FaSlack,
  FaUserFriends,
  FaCog,
  FaHome,
} from "react-icons/fa";
import "../App.css";

import Nav from "react-bootstrap/Nav";
const SideNav = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">
          <h2>
            <FaSlack />
          </h2>
        </Nav.Link>
        <br />
        <Nav.Link href="/home">
          <h4>
            <FaHome />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaChartBar />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaClipboard />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaFolder />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaCalendarCheck />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaUserFriends />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaCommentAlt />
          </h4>
        </Nav.Link>
        <Nav.Link>
          <h4>
            <FaSignInAlt />
          </h4>
        </Nav.Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Nav.Link>
          <h4>
            <FaCog />
          </h4>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SideNav;
