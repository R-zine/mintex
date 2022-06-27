import React from "react";
import logo from "../../images/logo.png";
import { nanoid } from "nanoid";

const NavbarItem = ({ title, modalOpen }) => (
  <div
    className="menu-item"
    onClick={() => {
      if (title == "Home") window.scroll({ top: 0, behavior: "smooth" });
      else if (title == "Privacy") {
        modalOpen(true);
      } else {
        document
          .querySelector(`.${title}`)
          .scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    {title}
    <div className="menu-item-hover" />
  </div>
);

const Navbar = ({ modalOpen }) => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        />
        <div className="menu-items">
          {["Home", "Wallet", "Transactions", "Contact", "Privacy"].map((i) => (
            <NavbarItem title={i} key={nanoid()} modalOpen={modalOpen} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
