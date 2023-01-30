import React from "react";
import Featured from "../components/Featured";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
        <h1 className="home__title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home__title">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
