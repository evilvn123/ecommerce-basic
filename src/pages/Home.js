import React from "react";
import banner from "../assets/istockphoto-823256052-170667a.jpg";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <img className="banner" src={banner} alt="banner" />
    </div>
  );
};

export default Home;
