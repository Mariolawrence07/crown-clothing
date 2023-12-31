import "./cart-item.styles.scss";

const CartItem = ({ CartItems }) => {
  const { name, price, quantity, imageUrl } = CartItems;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity}x{price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
