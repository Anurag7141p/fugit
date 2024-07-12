import React from "react";
import logoLight from "../assets/img/logo-light.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-5">
        <div className="container">
          {/* Row START */}
          <div className="row g-4">
            {/* Widget 1 START */}
            <div className="col-lg-5 pe-5">
              {/* logo */}
              <a href="index.html">
                <h4 className="d-flex">
                  <img
                    style={{ width: "20px", marginRight: "10px" }}
                    src={logoLight}
                    alt="logo"
                  />
                  <span className="text-white">Fugit</span>
                </h4>
              </a>
              <p className="my-3 text-body-secondary">
                At Fugit, our approach is defined by friendliness, adaptability, and
                a keen understanding of our customers' needs.
              </p>
              <p className="mb-2">
                <a
                  href="#"
                  className="text-body-secondary text-primary-hover d-flex"
                >
                  <span className="material-symbols-outlined me-2 text-primary">
                    phone_in_talk
                  </span>
                  +91 9972519906 / +91 9686018281
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="text-body-secondary d-flex text-primary-hover"
                >
                  <span className="material-symbols-outlined me-2 text-primary">
                    mail
                  </span>
                  support@fugit.in
                </a>
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
                      <a className="nav-link text-body-secondary" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-body-secondary"
                        href="about-us.html"
                      >
                        About us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-body-secondary"
                        href="contact-us.html"
                      >
                        Contact us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-body-secondary"
                        href="services.html"
                      >
                        Services
                      </a>
                    </li>
                    {/* <li className="nav-item"><a className="nav-link text-body-secondary" href="faq.html">Faq</a></li> */}
                  </ul>
                </div>

                {/* Link block */}
                <div className="col-6">
                  <h5 className="text-white mb-2 mb-md-4">Link</h5>
                  <ul className="nav flex-column text-primary-hover">
                    <li className="nav-item">
                      <a className="nav-link text-body-secondary" href="#">
                        Privacy policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-body-secondary" href="#">
                        Terms and conditions
                      </a>
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
