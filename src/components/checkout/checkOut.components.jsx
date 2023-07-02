import { useContext } from "react";
// import CartItem from "../cartItem/cart-item.components"
import "./checkOut.styles.scss";
import { CartContext } from "../../context/dropDown-context";
import CheckoutItem from "../checkout-item/checkout-item.components";

const CheckOut = () => {
  const { cartItems, cartTotal} =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
       
          <CheckoutItem key={item.id} cartItem={item}/>
          // {/* <span onClick={() => removeItemFromCart(item)}>decrement</span>
          // <br></br>
          // <span onClick={() => addItemToCart(item)}>Increment</span> */}
       
      ))}
      <span className="total">${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
