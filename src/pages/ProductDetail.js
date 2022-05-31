import React from "react";
import { useParams } from "react-router-dom";
import products from "../__mockup/product";

const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find(
    (item) => item.id === parseInt(productId)
  );
  return (
    <div className="productDetail">
      <div className="container">
        <div className="images">
          <img
            className="main-image"
            src={currentProduct.images[0]}
            alt={currentProduct.name}
          />
          <div className="list-images">
            {currentProduct.images.map((item, index) => (
              <img key={index} src={item} alt={item} />
            ))}
          </div>
        </div>
        <div className="information">
          <h4>{currentProduct.name}</h4>
          <p>{currentProduct.description}</p>
          <p>{currentProduct.price}</p>
          <div className="size">
            {currentProduct.sizes.map((item) => (
              <span key={item}>
                <input id={item} name="size" type={"radio"} value={item} />
                <label htmlFor={item}>{item}</label>
              </span>
            ))}
          </div>
          <div className="color">
            {currentProduct.colors.map((item) => (
              <span key={item}>
                <input id={item} name="size" type={"radio"} value={item} />
                <label htmlFor={item}>
                  <div
                    style={{
                      backgroundColor: item,
                      width: "10px",
                      height: "10px",
                      display: "inline-block",
                    }}
                  ></div>
                </label>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
