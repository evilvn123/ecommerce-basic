const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <img src={item.image} alt="" />
      <span>{item.name}</span>
      <span>{+item.price}</span>
      <span>{item.quantity}</span>
      <span>{+item.price * item.quantity}</span>
    </div>
  );
};

export default CartItem;
