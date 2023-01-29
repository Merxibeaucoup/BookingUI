import React from "react";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fp__item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="fp__img"
        />
        <span className="fp__name">ApartHotel Stare Miasto</span>
        <span className="fp__city">Madrid</span>
        <span className="fp__price">Starting from $120</span>
        <div className="fp__rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp__item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
          alt=""
          className="fp__img"
        />
        <span className="fp__name">Oriente Palace Apartments</span>
        <span className="fp__city">Madrid</span>
        <span className="fp__price">Starting from $97</span>
        <div className="fp__rating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp__item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
          alt=""
          className="fp__img"
        />
        <span className="fp__name">numa I vita Apartments</span>
        <span className="fp__city">Florence</span>
        <span className="fp__price">Starting from $96</span>
        <div className="fp__rating">
          <button>9.3</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fp__item">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"
          alt=""
          className="fp__img"
        />
        <span className="fp__name">Continents Apartments</span>
        <span className="fp__city">Prague</span>
        <span className="fp__price">Starting from $82</span>
        <div className="fp__rating">
          <button>8.3</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
