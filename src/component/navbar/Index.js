import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/launchPast">LaunchesPast</Link>
        </li>
        <li>
          <Link to="/histories">Histories</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
