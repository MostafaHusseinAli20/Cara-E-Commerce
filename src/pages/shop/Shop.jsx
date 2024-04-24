import onePro from "../home/imgScroll/img_5terre.jpg";
import twoPro from "../home/imgScroll/twoPro.jpg";
import threePro from "../home/imgScroll/threePro.jpg";
import fourPro from "../home/imgScroll/fourPro.jpg";
import fivePro from "../home/imgScroll/fivePro.jpg";
import sixPro from "../home/imgScroll/sixPro.png";
import sevenPro from "../home/imgScroll/sevePro.jpg";
import eightPro from "../home/imgScroll/eaitPro.jpg";
import ninePro from "../home/imgScroll/nignPro.jpg";
import tenPro from "../home/imgScroll/tenPro.jpeg";
import elevenPro from "../home/imgScroll/elevenPro.jpg";
import twilvPro from "../home/imgScroll/twinPro.jpg";
import threetyPro from "../home/imgScroll/threetyPro.webp";
import { FaStar } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import shopBg from "./shopbg/shop-page.jpg";
// Arrows Pagination
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
//Css File
import "./Shop.css";
import { Link } from "react-router-dom";
function Shop() {
  return (
    <>
      <section className="shoping">
        <div className="shop">
          <h1 className="text-center fw-bold">#stayhome</h1>
          <p className="text-center">
            Save more money with coupons & up to 70% OFF!
          </p>
          <img src={shopBg} alt="" />
        </div>
        {/* Search & Filter */}
        <div className="search_filter container">
          <div className="search">
            <label htmlFor="search" className="form-label text-light fs-5">
              Search for a product:
            </label>
            <div className="col-md-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g Wood Shelves..."
                  id="validationDefaultUsername"
                  aria-describedby="inputGroupPrepend2"
                  required
                />
                <span
                  className="input-group-text rounded"
                  id="inputGroupPrepend2"
                >
                  <GoSearch/>
                </span>
                <div className="filter text-light">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>Filter Products By Category:</option>
                    <option value="1">All</option>
                    <option value="2">Smartphones</option>
                    <option value="3">Laptops</option>
                    <option value="1">Fragrances</option>
                    <option value="2">Skincare</option>
                    <option value="3">Grocerice</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}

        <div className="container products" style={{ marginTop: "7rem" }}>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="oneDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
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
                      <h4 className="fw-bolder prodact mt-3">$549.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="twoDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img src={twoPro} className="card-img-top rounded-4" alt="" />
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
                      <h4 className="fw-bolder prodact mt-3">$899.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="threeDiv">
                <div
                  className="card mb-3 rounded-4 mx-3"
                  style={{ width: "19rem" }}
                >
                  <img
                    src={threePro}
                    className="card-img-top rounded-4"
                    alt=""
                  />
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
                      <h4 className="fw-bolder prodact mt-3">$1,249.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="fourDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={fourPro}
                    className="card-img-top rounded-4"
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
                      <h4 className="fw-bolder prodact mt-3">$280.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="fiveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
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
                      <h4 className="fw-bolder prodact mt-3">$499.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="sixDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
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
                      <h4 className="fw-bolder prodact mt-3">$1,749.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="seveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
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
                      <h4 className="fw-bolder prodact mt-3">$1,499.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="eightDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={eightPro}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Microsoft Surface
                    </h5>
                    <h4 className="card-text fw-bold">
                      Microsoft Surface Laptop 4
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.43)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$1,499.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="nignDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
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
                      <h4 className="fw-bolder prodact mt-3">$1,099.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tenDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={tenPro}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">HP Pavilion</h5>
                    <h4 className="card-text fw-bold">
                      HP Pavilion 15-DK1056WM
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.43)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$1,099.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="elevenDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={elevenPro}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Impression of Acqua Di Gio
                    </h5>
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
                      <h4 className="fw-bolder prodact mt-3">$13.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="twilveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
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
                      <h4 className="fw-bolder prodact mt-3">$40.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="threetyDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={threetyPro}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Fog Scent Xpressio
                    </h5>
                    <h4 className="card-text fw-bold">
                      Fog Scent Xpressio Perfume
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.59)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$13.00</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item me-3">
                  <a className="page-link rounded-3 " href="#">
                    <FaArrowLeft />
                  </a>
                </li>
                <li className="page-item me-3">
                  <a className="page-link rounded-3 " href="#">
                    1
                  </a>
                </li>
                <li className="page-item me-3">
                  <Link className="page-link rounded-3" to="/pag2">
                    2
                  </Link>
                </li>
                <li className="page-item me-3">
                  <Link className="page-link rounded-3" to="/pag3">
                    3
                  </Link>
                </li>
                <li className="page-item me-3">
                  <a className="page-link rounded-3" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link rounded-3" href="#">
                    <FaArrowRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
