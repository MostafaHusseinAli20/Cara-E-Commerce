// Link Css File
import "./pag2.css";
// Background Page
import shopBg from "../shopbg/shop-page.jpg";
// Images Products
import oneProd from "../imgesPagsPagination/OnePro.jpg";
import twoProd from "../imgesPagsPagination/twoPro.jpg";
import threeProd from "../imgesPagsPagination/threePro.jpg";
import fourProd from "../imgesPagsPagination/fourPro.jpg";
import fiveProd from "../imgesPagsPagination/fivePro.jpg";
import sixProd from "../imgesPagsPagination/sixPro.jpg";
import sevenProd from "../imgesPagsPagination/sevenPro.jpg";
import eightProd from "../imgesPagsPagination/eightPro.png";
import nineProd from "../imgesPagsPagination/ninePro.jpg";
import tenProd from "../imgesPagsPagination/tenPro.jpg";
import elevenProd from "../imgesPagsPagination/elevenPro.jpg";
// Rating Stars
import { FaStar } from "react-icons/fa";
// Arrows Pagination
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// Icon Serch Form
import { GoSearch } from "react-icons/go";
// import use Navigat
import { useNavigate } from "react-router-dom";
function Pag2() {
    const navigat = useNavigate()
    const Nav = () => {
        navigat("/shop")
    }
  return (
    <>
      <section className="shopPag2">
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
                ><GoSearch /></span>
                
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
            <div className="col-lg-3 col-md-6 col-sm12">
              <div className="oneDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={oneProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Al Munakh</h5>
                    <h4 className="card-text fw-bold" style={{ width: "105%" }}>
                      Non-Alcoholic Concentrated Perfume Oil
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.21)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$120.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Two Product */}
            <div className="col-lg-3 col-md-6 col-sm12">
              <div className="twoDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={twoProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Lord - Al-Rehab
                    </h5>
                    <h4 className="card-text fw-bold">Eau De Perfume Spray</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.7)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$30.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Three Product */}
            <div className="col-lg-3 col-md-6 col-sm12">
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
                    <h5 className="card-title text-secondary">L'Oreal Paris</h5>
                    <h4 className="card-text fw-bold">Hyaluronic Acid Serum</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.83)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$19.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Four Product */}
            <div className="col-lg-3 col-md-6 col-sm12">
              <div className="fourDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={fourProd}
                    className="card-img-top rounded-4"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Hemani Tea</h5>
                    <h4 className="card-text fw-bold">Tree Oil 30ml</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.52)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$12.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Five Product */}
            <div className="col-lg-3 col-md-6 col-sm12">
              <div className="fiveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={fiveProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Dermive</h5>
                    <h4 className="card-text fw-bold">
                      Oil Free Moisturizer 100ml
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.56)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$40.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Six Product */}
            <div className="col-lg-3 col-md-6 col-sm12">
              <div className="sixDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={sixProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      ROREC White Rice
                    </h5>
                    <h4 className="card-text fw-bold">Skin Beauty Serum.</h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.42)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$46.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Seven Product */}
            <div className="col-lg-3 col-md-6 col-sm12">
              <div className="seveDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={sevenProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">Fair & Clear</h5>
                    <h4 className="card-text fw-bold">
                      Freckle Treatment Cream- 15gm
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.06)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact pt-3">$70.00</h4>
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
                    <h5 className="card-title text-secondary">Saaf & Khaas</h5>
                    <h4 className="card-text fw-bold">
                      - Daal Masoor 500 grams
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />

                      <h6 className="mx-2 text-secondary">(4.44)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$20.00</h4>
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
                    <h5 className="card-title text-secondary">
                      Bake Parlor Big
                    </h5>
                    <h4 className="card-text fw-bold">
                      Elbow Macaroni - 400 gm
                    </h4>
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
                      <h4 className="fw-bolder prodact mt-3">$14.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="tenDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={tenProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">
                      Baking Food Items
                    </h5>
                    <h4 className="card-text fw-bold">
                      Orange Essence Food Flavou
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.85)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$14.00</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="elevenDiv">
                <div className="card rounded-4 mx-3" style={{ width: "19rem" }}>
                  <img
                    src={elevenProd}
                    className="card-img-top rounded-4 h-50"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title text-secondary">fauji</h5>
                    <h4 className="card-text fw-bold">
                      cereals muesli fruit nuts
                    </h4>
                    <div className="rate d-flex">
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <FaStar className="text-warning fs-5" />
                      <h6 className="mx-2 text-secondary">(4.94)</h6>
                    </div>
                    <div className="price_cart d-flex">
                      <h4 className="fw-bolder prodact mt-3">$46.00</h4>
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
                  style={{cursor : 'pointer'}} onClick={Nav}>
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

export default Pag2;
