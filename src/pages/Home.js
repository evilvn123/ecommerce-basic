import React from "react";
import banner from "../assets/istockphoto-823256052-170667a.jpg";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import products from "../__mockup/product";

const Home = () => {
  return (
    <div className="home">
      <img className="banner" src={banner} alt="banner" />
      <h3>Lastest Product</h3>
      <div className="lastest">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
