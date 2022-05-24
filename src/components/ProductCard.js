import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({}) => {
  const product = {
    images: [
      "http://placekitten.com/400/252",
      "http://placekitten.com/200/126",
      "http://placekitten.com/200/126",
    ],
    name: "Kitten",
    description:
      "Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.",
    price: "180",
    sizes: ["S", "M", "L"],
    colors: ["black", "white", "yellow"],
  };
  return (
    <div className="productCard">
      <img className="image" src={product.images[0]} alt={product.name} />
      <span className="name">{product.name}</span>
      <span className="price">${product.price}</span>
    </div>
  );
};

export default ProductCard;
