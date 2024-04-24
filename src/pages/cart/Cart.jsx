import "./Cart.css";
import imgCartBg from "./cartBg/cart.jpg";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const returnToShop = () => {
    navigate("/shop");
  }
  return (
    <>
      <section className="cart my-5 py-4">
        <div className="mainCartText text-center">
          <h1 className="fw-bold">#Your_cart</h1>
          <p>Add your coupon code & Save up to 70%</p>
        </div>
        <div className="cartBg">
          <img src={imgCartBg} className="opacity-25" alt="" />
        </div>
        
        <div className="empty text-light text-center">
            <h3 className="fw-bold">Your cart is empty. start adding new items now!</h3>
            <button onClick={returnToShop} 
            type="button" className="btn mt-3 fw-bold">Go To Shop</button>
        </div>
      </section>
    </>
  );
}

export default Cart;
