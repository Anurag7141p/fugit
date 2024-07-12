import React from 'react';

const ServiceReview = () => {
  return (
    <section>
      <div className="container pt-xl-5 ">
        <div className="row mb-5">
          <div className="col-xl-10 mx-auto text-center">
            {/* Title */}
            <h1>Fugit has all your needs covered</h1>
            <p className="lead pt-3">
              Our range of services is designed to enhance every aspect of your
              travel experience, from seamless car rentals to convenient airport
              transfers and tailored travel packages. Discover how we can elevate
              your travel experience and make every mile memorable.
            </p>
            {/* Meta */}
            <div className="hstack gap-3 flex-wrap justify-content-center">
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
        {/* Row END */}
      </div>
    </section>
  );
};

export default ServiceReview;
