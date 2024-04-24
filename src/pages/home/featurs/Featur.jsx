import "./Featur.css";
import onePro from "../imgScroll/img_5terre.jpg";
import twoPro from "../imgScroll/twoPro.jpg";
import threePro from "../imgScroll/threePro.jpg";
import fourPro from "../imgScroll/fourPro.jpg";
import fivePro from "../imgScroll/fivePro.jpg";
import sixPro from "../imgScroll/sixPro.png";
import sevenPro from "../imgScroll/sevePro.jpg";
import eightPro from "../imgScroll/eaitPro.jpg";
import ninePro from "../imgScroll/nignPro.jpg";
import tenPro from "../imgScroll/tenPro.jpeg"
import elevenPro from '../imgScroll/elevenPro.jpg';
import twilvPro from '../imgScroll/twinPro.jpg';
import threetyPro from '../imgScroll/threetyPro.webp'
import { Link } from "react-router-dom";
// Import Icons
import { FaStar } from "react-icons/fa";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoArrowUpRight } from "react-icons/go";

// import Featur from "./featurs/Featur";
function Feature() {
  return (
    <>
      {/* Featured Products*/}
      <div className="Feature_prod container my-5">
        <h1 className="text-center text-light">Featured Products</h1>
        <p className="text-center text-light fs-5 mb-5 mt-3">
          Summer collection new modern design
        </p>
        <div className="scroll-container">
          {/* 1 */}
          <div className="oneDiv">
            <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img src={onePro} className="card-img-top rounded-4" alt="" />
              <div className="card-body">
                <h5 className="card-title text-secondary">Apple</h5>
                <h4 className="card-text fw-bold">iPhone 9</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.69)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$549.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="twoDiv">
            <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={twoPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Apple</h5>
                <h4 className="card-text fw-bold">iPhone X</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.4)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$899.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="threeDiv">
            <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img src={threePro} className="card-img-top rounded-4" alt="" />
              <div className="card-body">
                <h5 className="card-title text-secondary">Samsung</h5>
                <h4 className="card-text fw-bold">Samsung Universe 9</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.09)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$1,249.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact ">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="fourDiv">
            <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={fourPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">OPPO</h5>
                <h4 className="card-text fw-bold">OPPO F19</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.03)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$280.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact ">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="fiveDiv">
            <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={fivePro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Huawei</h5>
                <h4 className="card-text fw-bold">Huawei P30</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.09)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$499.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="sixDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={sixPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Apple</h5>
                <h4 className="card-text fw-bold">MacBook Pro</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.57)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$1,749.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 7 */}
          <div className="seveDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={sevenPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Samsung</h5>
                <h4 className="card-text fw-bold">Samsung Galaxy Book</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.25)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$1,499.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 8 */}
          <div className="eightDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={eightPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Microsoft Surface</h5>
                <h4 className="card-text fw-bold">Microsoft Surface Laptop 4</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.43)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$1,499.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 9 */}
          <div className="nignDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={ninePro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Infinix</h5>
                <h4 className="card-text fw-bold">Infinix INBOOK</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.54)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$1,099.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 10 */}
          <div className="tenDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={tenPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">HP Pavilion</h5>
                <h4 className="card-text fw-bold">HP Pavilion 15-DK1056WM</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.43)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$1,099.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 11 */}
          <div className="elevenDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={elevenPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Impression of Acqua Di Gio</h5>
                <h4 className="card-text fw-bold">perfume Oil</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.26)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$13.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 12 */}
          <div className="twilveDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={twilvPro}
                className="card-img-top rounded-4 h-50"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Royal_Mirage</h5>
                <h4 className="card-text fw-bold">Brown Perfume</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$40.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 13 */}
          <div className="threetyDiv">
          <div className="card rounded-4 mx-3" style={{ width: "22rem" }}>
              <img
                src={threetyPro}
                className="card-img-top rounded-4"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title text-secondary">Fog Scent Xpressio</h5>
                <h4 className="card-text fw-bold">Fog Scent Xpressio Perfume</h4>
                <div className="rate d-flex">
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <FaStar className="text-warning fs-5" />
                  <h6 className="mx-2 text-secondary">(4.59)</h6>
                </div>
                <div className="price_cart d-flex">
                  <h4 className="fw-bolder prodact">$13.00</h4>
                  <div className="d-flex">
                    <Link to="/shop" className="btn prodact">
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
