import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotel__container">
        <div className="hotel__wrapper">
          <h1 className="hotel__title">Grand hotel</h1>
          <div className="hotel__address">
            <FaSearchLocation />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotel__distance">
            Excellent location - 500m from center
          </span>
          <span className="hotel__price__highlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotel__images">
            {photos.map((photo) => (
              <div className="hotel__img__wrapper">
                <img src={photo.src} alt="" className="hotel__img" />
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
              <button>Reserve of Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
