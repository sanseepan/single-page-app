import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavLink to="/">Home | </NavLink>
      <NavLink to="/about">about | </NavLink>
      <NavLink to="/contact">contact</NavLink>
    </div>
  );
};

export default Nav;
