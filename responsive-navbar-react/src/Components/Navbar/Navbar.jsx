import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const navLinks = [
    { to: "/", text: "About" },
    { to: "/", text: "Projects" },
    { to: "/", text: "Contact" },
  ];

  return (
    <div className="navbar">
      <nav>
        <div className="navbar--nav">
          <div className="navbar--nav--title">
            <NavLink to="/">
              <img src="/assets/logotk.png" alt="logotk" />
            </NavLink>
          </div>
          <div className="navbar--nav--links">
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.to} activeClassName="active">
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="menu">
            <svg
              onClick={hamburgerMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
            </svg>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={hamburgerMenu}>
          <div className="mobile-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 256 256"
            >
              <path d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z" />
            </svg>
          </div>
        </span>
        <ul onClick={hamburgerMenu}>
          {navLinks.map((link, index) => (
            <div>
              <li key={index}>
                <NavLink to={link.to} activeClassName="active">
                  {link.text}
                </NavLink>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
