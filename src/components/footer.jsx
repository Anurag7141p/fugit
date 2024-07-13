import React from "react";
import logoLight from "../assets/img/logo-light.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll behavior
    });
  };

  return (
    <>
      <footer className="bg-dark pt-5">
        <div className="container">
          {/* Row START */}
          <div className="row g-4">
            {/* Widget 1 START */}
            <div className="col-lg-5 pe-5">
              {/* logo */}
              <Link href="/">
                <h4 className="d-flex">
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={logoLight}
                    alt="logo"
                  />
                  <span className="text-white">Fugit</span>
                </h4>
              </Link>
              <p className="my-3 text-body-secondary">
                At Fugit, our approach is defined by friendliness, adaptability, and
                a keen understanding of our customers' needs.
              </p>
              <p className="mb-2">
                <Link
                  href="#"
                  className="text-body-secondary text-primary-hover d-flex"
                >
                  <span className="material-symbols-outlined me-2 text-primary">
                    phone_in_talk
                  </span>
                  +91 9972519906 / +91 9686018281
                </Link>
              </p>
              <p className="mb-0">
                <Link
                  href="#"
                  className="text-body-secondary d-flex text-primary-hover"
                >
                  <span className="material-symbols-outlined me-2 text-primary">
                    mail
                  </span>
                  support@fugit.in
                </Link>
              </p>
            </div>
            {/* Widget 1 END */}

            {/* Widget 2 START */}
            <div className="col-lg-7 ms-auto">
              <div className="row g-4">
                {/* Link block */}
                <div className="col-6">
                  <h5 className="text-white mb-2 mb-md-4">Page</h5>
                  <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-body-secondary"
                        to="/"
                        onClick={scrollToTop} // Scroll to top when clicked
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-body-secondary"
                        to="/about-us"
                        onClick={scrollToTop} // Scroll to top when clicked
                      >
                        About us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-body-secondary"
                        to="/contact-us"
                        onClick={scrollToTop} // Scroll to top when clicked
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-body-secondary"
                        to="/services"
                        onClick={scrollToTop} // Scroll to top when clicked
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Link block */}
                <div className="col-6">
                  <h5 className="text-white mb-2 mb-md-4">Link</h5>
                  <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item">
                      <Link
                        className="nav-link text-body-secondary"
                        href="/"
                        onClick={scrollToTop} // Scroll to top when clicked
                      >
                        Privacy policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link text-body-secondary"
                        href="/"
                        onClick={scrollToTop} // Scroll to top when clicked
                      >
                        Terms and conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Widget 2 END */}
          </div>
          {/* Row END */}

          {/* Divider */}
          <hr className="mt-4 mb-0" />

          {/* Bottom footer */}
          <div className="row">
            <div className="container">
              <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                {/* copyright text */}
                <div className="text-muted">
                  Copyrights ©2024 Fugit. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
