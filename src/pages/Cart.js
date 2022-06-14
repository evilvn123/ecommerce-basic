import { useState } from "react";
import CartItem from "../components/CartItem";
import "../styles/Cart.css"

const Cart = ({}) => {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <div className="cart">
      {carts.map((item, index) => (
        <CartItem key={"index: " + index + ", id: " + item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
