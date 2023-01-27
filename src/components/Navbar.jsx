import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <span className="navbar__logo">E.Z booking</span>
        <div className="navbar__items">
          <button className="navbar__items__button">Register</button>
          <button className="navbar__items__button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
