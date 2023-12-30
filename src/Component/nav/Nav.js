import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="profile">
        <Link to="/">Profile</Link>
      </div>
      <div className="names">
        <Link to="home">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
