import { Link } from "react-router-dom";
import "./style.css";
import './script.js';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2 navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand fw-blod fs-1 text-light ">
            Cara
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light fs-5" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link text-light fs-5">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-light fs-5">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-light fs-5">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-light fs-5">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
