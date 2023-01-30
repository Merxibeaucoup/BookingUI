import React from "react";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/421437225.jpg?k=5adaf9e099a9d7397cd3e5ee76c07bbdd7e9d3bcf4df5c1169d4d595d3a0ef5b&o=&hp=1"
        alt=""
        className="searchItem__img"
      />
      <div className="searchItem__desc">
        <h1 className="searchItem__title">Tower Street Apartments</h1>
        <span className="searchItem__distance">500m from center</span>
        <span className="searchItem__taxiOp">Free airport taxi</span>
        <span className="searchItem__subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchItem__features">
          Entire Studio • 1 bathroom • 21m 1 full bed
        </span>
        <span className="searchItem__cancelOp">Free cancellation</span>
        <span className="searchItem__cancelOp__subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="searchItem__details">
        <div className="searchItem__rating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchItem__details__texts">
          <span className="searchItem__price">$123</span>
          <span className="searchItem__taxOp">Includes taxes and fees</span>
          <button className="searchItem__checkBtn">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
