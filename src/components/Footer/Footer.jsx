import "./footer.css";
// import { CiFacebook } from "react-icons/ci";
function Fotter() {
  return (
    <>
      <footer className="footer my-5 text-light text-center">
        <div className="custom-shape-divider-top-1712948994">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-5 col-xs-12">
                <h4 className="my-3 fw-bolder">Contact</h4>
                <p className="mt-4 fs-5">Address: 562 Road, California.</p>
                <p className="mt-4 fs-5">Phone: +0123456789 (+91)</p>
                <p className="mt-4 fs-5">Hours: 10:00 - 18:00, Mon - Sat</p>
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 about">
                <h4 className="my-3 fw-bolder">About</h4>
                <ul>
                  <p className="mt-4 fs-5">About Us</p>
                  <p className="mt-4 fs-5">Depvery information</p>
                  <p className="mt-4 fs-5">Privacy Policy</p>
                  <p className="mt-4 fs-5">Tearms &amp; Conditions</p>
                  <p className="mt-4 fs-5">Contact Us</p>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 myAcc">
                <h4 className="my-3 fw-bolder">My Account</h4>
                <ul>
                  <p className="mt-4 fs-5">Sign in</p>
                  <p className="mt-4 fs-5">View Cart</p>
                  <p className="mt-4 fs-5">My Wishlist</p>
                  <p className="mt-4 fs-5">Track My Order</p>
                  <p className="mt-4 fs-5">Help</p>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-xs-12 follow">
                <h4 className="my-3 fw-bolder">Follow</h4>
                <ul>
                  <p className="fs-5">
                    <i className="fa-brands fa-facebook"></i> Facbook
                  </p>
                  <p className="fs-5">
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </p>
                  <p className="fs-5">
                    <i className="fa-brands fa-pinterest"></i> Pinterest
                  </p>
                  <p className="fs-5">
                    <i className="fa-brands fa-youtube"></i> Youtupbe
                  </p>
                  <p className="fs-5">
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Fotter;
