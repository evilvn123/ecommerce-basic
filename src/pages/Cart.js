import { useState } from "react";
import CartItem from "../components/CartItem";

const Cart = ({}) => {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <div>
      {carts.map((item, index) => (
        <CartItem key={"index: " + index + ", id: " + item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
