import React, { useState } from "react";
import {
  FaBed,
  FaCalendarAlt,
  FaCar,
  FaPlane,
  FaTaxi,
  FaUsers,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "container listMode" : "container"}>
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
        {type !== "list" && (
          <>
            <h1 className="header__title">
              A lifetime of discounts? Its Genius.
            </h1>
            <p className="header__desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free EZbooking account
            </p>
            <button className="header__btn">Sign in / Register</button>
            <div className="header__search">
              <div className="header__search__item">
                <FaBed className="header__icon" />
                <input
                  type="text"
                  placeholder="Search destination"
                  className="header__search__item__input"
                />
              </div>
              <div className="header__search__item">
                <FaCalendarAlt className="header__icon" />
                <span
                  className="header__search__item__text"
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}   `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="header__search__item">
                <FaUsers className="header__icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header__search__item__text"
                >
                  {`${options.adult} adult . ${options.children} children . ${options.room}`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="options__item">
                      <span className="options__item__text">Adult</span>
                      <div className="options__counter">
                        <button
                          className="options__item__counterBtn"
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="options__item__counterNUmber">
                          {options.adult}
                        </span>
                        <button
                          className="options__item__counterBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__item__text">Children</span>
                      <div className="options__counter">
                        <button
                          className="options__item__counterBtn"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="options__item__counterNUmber">
                          {options.children}
                        </span>
                        <button
                          className="options__item__counterBtn"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="options__item">
                      <span className="options__item__text">Room</span>
                      <div className="options__counter">
                        <button
                          className="options__item__counterBtn"
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className="options__item__counterNUmber">
                          {options.room}
                        </span>
                        <button
                          className="options__item__counterBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search__item">
                <button className="header__btn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
