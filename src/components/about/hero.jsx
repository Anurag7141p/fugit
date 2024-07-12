import React from "react";

const Hero = ({ subheading, heading, description }) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-xl-10 mx-auto text-center">
          <h4 className="opacity-2" data-aos="fade-down">
            {subheading}
          </h4>
          <h1 data-aos="fade-down">{heading}</h1>
          <p className="lead" data-aos="fade-down">
            {description}
          </p>

          <div
            className="hstack gap-3 flex-wrap justify-content-center"
            data-aos="fade-up"
          >
            {/* Item */}
            <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-flex align-items-center py-2 px-4">
              <span className="material-symbols-outlined me-2 text-warning">
                sentiment_very_satisfied
              </span>
              2K+ Happy Customers
            </h6>

            {/* Item */}
            <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-flex align-items-center py-2 px-4">
              <span className="material-symbols-outlined me-2 text-primary">
                supervised_user_circle
              </span>
              100+ Professionals
            </h6>

            {/* Item */}
            <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-flex align-items-center py-2 px-4">
              <span className="material-symbols-outlined me-2 text-success">
                support_agent
              </span>
              24/7 Support
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
