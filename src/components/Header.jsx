import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light welcome">
      <div className="navbar-brand fontColor">Chaihong Property</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item Home" style={{ marginRight: "40px" }}>
            <a className="nav-link optionFontColor" href="/">
              Home
            </a>
          </li>
          <li className="nav-item dropdown" style={{ marginRight: "40px" }}>
            <div
              className="nav-link dropdown-toggle optionFontColor"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Property List
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/Noble">
                Noble Ploenchit
              </a>
              <a className="dropdown-item" href="/Laviq">
                Laviq Sukhumvit 57
              </a>
              <a className="dropdown-item" href="/Esse">
                Esse at Singha Complex
              </a>
              <a className="dropdown-item" href="/Address">
                Address Siam Ratchathewi
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link optionFontColor" href="#footer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
