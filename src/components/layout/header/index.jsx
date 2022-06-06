import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

function Header(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className={"row-12"}>
        <div
          className={"col-8 project-name"}
        >
          Adaptive UI Wireframe Generation
        </div>
      </Navbar>
    </>
  );
}

export default Header;
