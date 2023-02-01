import React, { useState } from "react";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaLocationArrow,
  FaWindowClose,
} from "react-icons/fa";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MailList from "../components/MailList";
import Footer from "../components/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/256434007.jpg?k=a79943ccfe69681e6c6d932a70f480c0959be4560a5974c6b29f2e13cd9523dd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/256697440.jpg?k=fa406084644552c5a276f677bf6087ec3dc9c949795aa251ddfc5ec38cf0f984&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/256432400.jpg?k=c2a0c846afe54f5a634e87cdec99c1fa929729bee65a0299023fb52039c8192a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/141251361.jpg?k=f6681811fa76f544590946a2e796e4c56c954e8bf4c8e965d0887db664248216&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/256433091.jpg?k=3af5c1a7b0877e9901a78c96555c85ab9769ef757e10ba2b75830f39238ec09a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/256431492.jpg?k=d01a6112c93c60c0ecf24a50229c3914d2c141db896852571d91ca91d723aa31&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel__container">
        {open && (
          <div className="slider">
            <FaWindowClose className="close" onClick={() => setOpen(false)} />
            <FaArrowCircleLeft
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slider__wrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="slider__img"
              />
            </div>
            <FaArrowCircleRight
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotel__wrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotel__title">Grand hotel</h1>
          <div className="hotel__address">
            <FaLocationArrow />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotel__distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel__price__highlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotel__images">
            {photos.map((photo, i) => (
              <div className="hotel__img__wrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotel__img"
                />
              </div>
            ))}
          </div>
          <div className="hotel__details">
            <div className="hotel__details__texts">
              <h1 className="hotel__title">Stay in the heart of Krakow</h1>
              <p className="hotel__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate aliquam esse repellendus ullam asperiores quia quasi
                provident pariatur explicabo nostrum placeat quis nesciunt,
                ipsam ad doloribus, minus earum laborum sequi commodi! Nam quod
                quam, totam obcaecati enim modi dolorum rerum temporibus
                voluptatibus aspernatur aperiam sunt. Eos earum doloremque neque
                odio unde alias, vitae nobis iure eius obcaecati dignissimos
                corrupti molestiae ipsum, corporis dolores ea rerum dolorum
                doloribus! Esse, excepturi consectetur molestias pariatur eius,
                neque ad atque, cum illo facilis dolorem!
              </p>
            </div>
            <div className="hotel__details__price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
