import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../context/dropDown-context";

const CheckoutItem = ({ cartItem }) => {
  const { clearCartItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const ClearCartHandler = () => {
    clearCartItem(cartItem);
  };

  const IncreaseQuantity = () => {
    addItemToCart(cartItem);
  };
  const DecreaseQuantity = () => {
    removeItemFromCart(cartItem);
  };
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={ DecreaseQuantity}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={IncreaseQuantity}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={ClearCartHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
