import "./cart-dropDown.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/dropDown-context";
import Button from "../button/button.components";
import CartItem from "../cartItem/cart-item.components";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItems={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
