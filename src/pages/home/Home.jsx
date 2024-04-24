import { Link } from "react-router-dom";
import "./Home.css";
import backGround from "./backgroundHome/hero-section.png";
import freeShipping from "./featursImges/free-shipping.png";
import onlineOrder from "./featursImges/online-order.png";
import saveMoney from "./featursImges/save-money.png";
import promotions from "./featursImges/promotions.png";
import happySell from "./featursImges/happy-sell.png";
import support from "./featursImges/support.png";
import Feature from "./featurs/Featur";
import Discond from "../discond/Discond";
import Collection from "../collection/Collection";
function Home() {
  return (
    <>
      {/* Home */}
      <section className="home-back">
        <div className="card text-bg-dark">
          <img src={backGround} className="card-img" alt="..." />
          <div className="card-img-overlay container">
            <h5 className="card-title fw-bold">Trade-in-offer</h5>
            <p className="card-text">
              <h1>
                Super value deals <br />
                <span className="prodact">On all products</span>
              </h1>
            </p>
            <p className="card-text-pargraph">Save more with coupons & up to 70% off!</p>
            <div className="btns">
              <Link to="/shop">Shop More</Link>
            </div>
          </div>
        </div>
        {/* Features Div */}
        <div className="features container text-center py-5">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 freeShipping">
              <img src={freeShipping} alt="" />
              <h5 className="freeShippingtext mx-auto w-75">Free Shipping</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 onlineOrder">
              <img src={onlineOrder} alt="" />
              <h5 className="onlineOrdertext mx-auto w-75">Online Order</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 saveMoney">
              <img src={saveMoney} alt="" />
              <h5 className="saveMoneytext mx-auto w-75">Save Money</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 promotions">
              <img src={promotions} alt="" />
              <h5 className="promotionstext mx-auto w-75">Promotions</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 happySell">
              <img src={happySell} alt="" />
              <h5 className="happySelltext mx-auto w-75">Happy Sell</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 support">
              <img src={support} alt="" />
              <h5 className="supporttext mx-auto w-75">F24/7 Support</h5>
            </div>
          </div>
        </div>
        <Feature />
        <Discond/>
        <Collection />
      </section>    
    </>
  );
}

export default Home;
