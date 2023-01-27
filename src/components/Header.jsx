import React from "react";
import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__list">
          <div className="header__list__item active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="header__list__item">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="header__list__item">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="header__list__item">
            <FaBed />
            <span>Attractions</span>
          </div>
          <div className="header__list__item">
            <FaTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="header__title">A lifetime of discounts? Its Genius.</h1>
        <p className="header__desc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free EZbooking account
        </p>
        <button className="header__btn">Sign in / Register</button>
      </div>
    </div>
  );
};

export default Header;
