// Background Image
import shopBg from "../shopbg/shop-page.jpg";
// Images for Porducts
import oneProd from "../imgesPagsPagination3/onePro.jpg";
import twoProd from "../imgesPagsPagination3/twoPro.jpg";
import threeProd from "../imgesPagsPagination3/threePro.webp";
import fourProd from "../imgesPagsPagination3/fourPro.jpg";
import fiveProd from "../imgesPagsPagination3/fivePro.jpeg";
import sixProd from "../imgesPagsPagination3/sixPro.jpg";
import sevenProd from "../imgesPagsPagination3/sevenPro.jpg";
import eightProd from "../imgesPagsPagination3/eightPro.jpg";
import nineProd from "../imgesPagsPagination3/ninePro.jpg";
import tenProd from "../imgesPagsPagination3/tenPro.jpg";
import elevenProd from "../imgesPagsPagination3/elvenPro.jpg";
import twelveProd from "../imgesPagsPagination3/twelvePro.jpg";
// Arrows Pagination
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// Rateing Product
import { FaStar } from "react-icons/fa";
// Icon Serch Form
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
// import useNavigate
import { useNavigate } from "react-router-dom";
function Pag3() {
    const Navigation = useNavigate()
    const Navgigt = () => {
        Navigation("/shop")
    }
    const secondNav = () => {
        Navigation("/pag2")
    }
  return (
    <>
      <section className="shopPag3">
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
                  <GoSearch />
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
            {/* One Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="oneDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={oneProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Dry Rose</h5>
                    <h4 className="card-text fw-bold">Gulab Powder 50 Gram</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.87)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$70.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Two Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="twoDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={twoProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Boho Decor</h5>
                    <h4 className="card-text fw-bold">Plant Hanger For Home</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.08)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$41.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Three Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="threeDiv">
                <div
                  className="card mb-3 rounded-4 mx-3"
                  style={{ width: "19rem" }}
                >
                  <img
                    src={threeProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Flying Wooden</h5>
                    <h4 className="card-text fw-bold">Flying Wooden Bird</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.41)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$51.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Four Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="fourDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={fourProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">LED Lights</h5>
                    <h4 className="card-text fw-bold">
                      3D Embellishment Art Lamp
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.82)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-2">$20.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Five Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="fiveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={fiveProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">luxury palace</h5>
                    <h4 className="card-text fw-bold">
                      Handcraft Chinese style
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.44)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$60.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Six Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="sixDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={sixProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Golden</h5>
                    <h4 className="card-text fw-bold">Key Holder</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.92)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$30.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Seven Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="seveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={sevenProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Furniture Bed Set
                    </h5>
                    <h4 className="card-text fw-bold">Mornadi Velvet Bed</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.16)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$40.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Eight Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="eightDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={eightProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Ratttan Outdoor
                    </h5>
                    <h4 className="card-text fw-bold">Sofa for Coffe Cafe</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.74)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$50.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Nign Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="nignDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={nineProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Kitchen Shelf</h5>
                    <h4 className="card-text fw-bold">3 Tier Corner Shelves</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.31)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$700.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Ten Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tenDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={tenProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Multi Purpose</h5>
                    <h4 className="card-text fw-bold">Plastic Table</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.01)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$50.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Eleven Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="elevenDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={elevenProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">AmnaMart</h5>
                    <h4 className="card-text fw-bold">3 DOOR PORTABLE</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.06)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$41.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Twelve Product */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="twilveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={twelveProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Professional Wear
                    </h5>
                    <h4 className="card-text fw-bold">Sleeve Shirt Womens</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.26)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$90.00</h4>
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
                  <a className="page-link rounded-3"
                  onClick={Navgigt}
                  style={{cursor : 'pointer'}} >
                    1
                  </a>
                </li>
                <li className="page-item me-3">
                  <a className="page-link rounded-3" onClick={secondNav}
                  style={{cursor : 'pointer'}}>
                    2
                  </a>
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

export default Pag3;
