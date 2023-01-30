import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchItem from "../components/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list__container">
        <div className="list__wrapper">
          <div className="list__search">
            <h1 className="list__search__title">Search</h1>
            <div className="list__search__item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list__search__item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!opendate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to  ${format(date[0].endDate, "MM/dd/yyyy")}   `}</span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsOptions">
              <div className="list__search__item">
                <h5>Options</h5>
                <div className="list__option__item">
                  <span className="list__option__text">
                    Min price <small>(per night)</small>
                  </span>
                  <input type="number" />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">
                    Max price <small>(per night)</small>
                  </span>
                  <input type="number" />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Adult</span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Children</span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>
                <div className="list__option__item">
                  <span className="list__option__text">Room</span>
                  <input type="number" min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list__result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
