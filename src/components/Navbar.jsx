import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "not-active")}
        to="/"
      >
        Home
      </NavLink>
      {"-"}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "not-active")}
        to="/users"
      >
        users
      </NavLink>

      {"-"}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "not-active")}
        to="/admin"
      >
        {" "}
        Administración{" "}
      </NavLink>
      {"-"}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "not-active")}
        to="/login"
      >
        {" "}
        Login{" "}
      </NavLink>
    </div>
  );
}

export default Navbar;
