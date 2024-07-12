import React from 'react';

const Mission = () => {
  return (
    <section className="pt-0 pt-lg-5 mb-5 mt-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            {/* Title */}
            <h2>Our Mission</h2>
            <p>Fugit's mission is to</p>
            {/* Services */}
            <div className="row g-sm-4">
              <div className="col-12">
                <ul className="list-group list-group-borderless mt-2 mb-0">
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Provide high quality and standard delivery
                    </h6>
                  </li>
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Create and cultivate long term relationship with customers
                    </h6>
                  </li>
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Respond immediately to the changing needs of our customers
                    </h6>
                  </li>
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Achieve customer satisfaction
                    </h6>
                  </li>
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Improve our service continuously
                    </h6>
                  </li>
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Maintain professional relationship
                    </h6>
                  </li>
                  <li className="list-group-item">
                    <h6 className="fw-normal mb-0 d-flex">
                      <span className="material-symbols-outlined text-primary me-1">
                        label
                      </span>
                      Achieve highest standard of performance
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-primary text-white rounded-3 h-100 p-5">
              <h2 className="text-white mb-4">Our Vision</h2>
              <p className="lead text-white">
                To build good networking with customers and provide customer satisfaction of service with business stability, sustainable revenue, and profitable growth.
              </p>
            </div>
          </div>
        </div>
        {/* Row END */}
      </div>
    </section>
  );
};

export default Mission;
