import React from "react";

const ProductDetail = ({}) => {
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
  return <div>Detail</div>;
};

export default ProductDetail;
