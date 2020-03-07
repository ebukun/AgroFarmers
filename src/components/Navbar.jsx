import React from "react";
import { Link } from "react-router-dom";
import agro_logo from "./agro.png";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "#f7c22d" }}>
      <Link className="navbar-brand" to="/" style={{ textAlign: "center" }}>
        <img src={agro_logo} alt="" style={{ width: "70px" }} />
      </Link>
    </nav>
  );
};

export default NavBar;
