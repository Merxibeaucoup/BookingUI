import React from "react";

const Featured = () => {
  return (
    <div className="featured">
      {/* <div className="featured__item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/250x250/349720.jpg?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>Las Vegas</h1>
          <h2>565 properties</h2>
        </div>
      </div> */}
      <div className="featured__item">
        <img
          src="https://q-xx.bstatic.com/xdata/images/city/250x250/976840.jpg?k=cdf4e8e52801184286dbc9524dfad8ccf06693bc480adc440249bb7f530596d1&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>Orlando</h1>
          <h2>3,684 properties</h2>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/city/250x250/976870.jpg?k=4bb231f86e973cac2971077b1664c1374fc0d718c95634b4cb01ae4550262f23&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>Los Angeles</h1>
          <h2>1,712 properties</h2>
        </div>
      </div>
      <div className="featured__item">
        <img
          src="https://r-xx.bstatic.com/xdata/images/city/250x250/976784.jpg?k=717a6a83ea61edb06017bb8c9bd3d36511ec0e1aef59ac94235584d4fd1709cb&o="
          alt=""
          className="featured__img"
        />
        <div className="featured__titles">
          <h1>New York</h1>
          <h2>1,362 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
