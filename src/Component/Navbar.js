import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo3 from "../images/logo3.png";
function Navbar() {
  const location = useLocation();

  function isActive(hello) {
    if (hello == location.pathname) {
      return "activebtn";
    }
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark navbar_fixed "
      style={{ backgroundColor: "#039be5", marginBottom: "20px" }}
    >
      <Link to="/" style={{ textDecoration: "none" }} className={isActive("/")}>
        <img src={logo3} class=" logo" alt="..." />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-5 h1 ">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={`h2 ${isActive("/blog")}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item active mr-5 h1 ">
            <Link
              to="/blog"
              style={{ textDecoration: "none" }}
              className={`h2 ${isActive("/blog")}`}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item mr-5 h1">
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              className={`h2 ${isActive("/about")}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
