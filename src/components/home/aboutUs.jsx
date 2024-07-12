import React from "react";
import aboutImage from '../../assets/img/about/02.jpg';
import star from '../../assets/img/rating/star.png';
import halfStar from '../../assets/img/rating/half-star.png';

const AboutUs = () => {
  return (
    <>
      <section class="pb-0 py-xl-5">
        <div class="container py-xl-5">
          <div class="row g-4 justify-content-between align-items-center">
            {/* <!-- Left side START --> */}
            <div class="col-lg-5 position-relative">
              {/* <!-- Svg Decoration --> */}
              <figure class="position-absolute top-0 start-0 translate-middle z-index-1 ms-4">
                <svg class="fill-warning" width="77px" height="77px">
                  <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"></path>
                </svg>
              </figure>

              {/* <!-- Svg decoration --> */}
              <figure class="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                <svg
                  height="400"
                  class="fill-primary opacity-2"
                  viewBox="0 0 340 340"
                >
                  <circle cx="194.2" cy="2.2" r="2.2"></circle>
                  <circle cx="2.2" cy="2.2" r="2.2"></circle>
                  <circle cx="218.2" cy="2.2" r="2.2"></circle>
                  <circle cx="26.2" cy="2.2" r="2.2"></circle>
                  <circle cx="242.2" cy="2.2" r="2.2"></circle>
                  <circle cx="50.2" cy="2.2" r="2.2"></circle>
                  <circle cx="266.2" cy="2.2" r="2.2"></circle>
                  <circle cx="74.2" cy="2.2" r="2.2"></circle>
                  <circle cx="290.2" cy="2.2" r="2.2"></circle>
                  <circle cx="98.2" cy="2.2" r="2.2"></circle>
                  <circle cx="314.2" cy="2.2" r="2.2"></circle>
                  <circle cx="122.2" cy="2.2" r="2.2"></circle>
                  <circle cx="338.2" cy="2.2" r="2.2"></circle>
                  <circle cx="146.2" cy="2.2" r="2.2"></circle>
                  <circle cx="170.2" cy="2.2" r="2.2"></circle>
                  <circle cx="194.2" cy="26.2" r="2.2"></circle>
                  <circle cx="2.2" cy="26.2" r="2.2"></circle>
                  <circle cx="218.2" cy="26.2" r="2.2"></circle>
                  <circle cx="26.2" cy="26.2" r="2.2"></circle>
                  <circle cx="242.2" cy="26.2" r="2.2"></circle>
                  <circle cx="50.2" cy="26.2" r="2.2"></circle>
                  <circle cx="266.2" cy="26.2" r="2.2"></circle>
                  <circle cx="74.2" cy="26.2" r="2.2"></circle>
                  <circle cx="290.2" cy="26.2" r="2.2"></circle>
                  <circle cx="98.2" cy="26.2" r="2.2"></circle>
                  <circle cx="314.2" cy="26.2" r="2.2"></circle>
                  <circle cx="122.2" cy="26.2" r="2.2"></circle>
                  <circle cx="338.2" cy="26.2" r="2.2"></circle>
                  <circle cx="146.2" cy="26.2" r="2.2"></circle>
                  <circle cx="170.2" cy="26.2" r="2.2"></circle>
                  <circle cx="194.2" cy="50.2" r="2.2"></circle>
                  <circle cx="2.2" cy="50.2" r="2.2"></circle>
                  <circle cx="218.2" cy="50.2" r="2.2"></circle>
                  <circle cx="26.2" cy="50.2" r="2.2"></circle>
                  <circle cx="242.2" cy="50.2" r="2.2"></circle>
                  <circle cx="50.2" cy="50.2" r="2.2"></circle>
                  <circle cx="266.2" cy="50.2" r="2.2"></circle>
                  <circle cx="74.2" cy="50.2" r="2.2"></circle>
                  <circle cx="290.2" cy="50.2" r="2.2"></circle>
                  <circle cx="98.2" cy="50.2" r="2.2"></circle>
                  <circle cx="314.2" cy="50.2" r="2.2"></circle>
                  <circle cx="122.2" cy="50.2" r="2.2"></circle>
                  <circle cx="338.2" cy="50.2" r="2.2"></circle>
                  <circle cx="146.2" cy="50.2" r="2.2"></circle>
                  <circle cx="170.2" cy="50.2" r="2.2"></circle>
                  <circle cx="194.2" cy="74.2" r="2.2"></circle>
                  <circle cx="2.2" cy="74.2" r="2.2"></circle>
                  <circle cx="218.2" cy="74.2" r="2.2"></circle>
                  <circle cx="26.2" cy="74.2" r="2.2"></circle>
                  <circle cx="242.2" cy="74.2" r="2.2"></circle>
                  <circle cx="50.2" cy="74.2" r="2.2"></circle>
                  <circle cx="266.2" cy="74.2" r="2.2"></circle>
                  <circle cx="74.2" cy="74.2" r="2.2"></circle>
                  <circle cx="290.2" cy="74.2" r="2.2"></circle>
                  <circle cx="98.2" cy="74.2" r="2.2"></circle>
                  <circle cx="314.2" cy="74.2" r="2.2"></circle>
                  <circle cx="122.2" cy="74.2" r="2.2"></circle>
                  <circle cx="338.2" cy="74.2" r="2.2"></circle>
                  <circle cx="146.2" cy="74.2" r="2.2"></circle>
                  <circle cx="170.2" cy="74.2" r="2.2"></circle>
                  <circle cx="194.2" cy="98.2" r="2.2"></circle>
                  <circle cx="2.2" cy="98.2" r="2.2"></circle>
                  <circle cx="218.2" cy="98.2" r="2.2"></circle>
                  <circle cx="26.2" cy="98.2" r="2.2"></circle>
                  <circle cx="242.2" cy="98.2" r="2.2"></circle>
                  <circle cx="50.2" cy="98.2" r="2.2"></circle>
                  <circle cx="266.2" cy="98.2" r="2.2"></circle>
                  <circle cx="74.2" cy="98.2" r="2.2"></circle>
                  <circle cx="290.2" cy="98.2" r="2.2"></circle>
                  <circle cx="98.2" cy="98.2" r="2.2"></circle>
                  <circle cx="314.2" cy="98.2" r="2.2"></circle>
                  <circle cx="122.2" cy="98.2" r="2.2"></circle>
                  <circle cx="338.2" cy="98.2" r="2.2"></circle>
                  <circle cx="146.2" cy="98.2" r="2.2"></circle>
                  <circle cx="170.2" cy="98.2" r="2.2"></circle>
                  <circle cx="194.2" cy="122.2" r="2.2"></circle>
                  <circle cx="2.2" cy="122.2" r="2.2"></circle>
                  <circle cx="218.2" cy="122.2" r="2.2"></circle>
                  <circle cx="26.2" cy="122.2" r="2.2"></circle>
                  <circle cx="242.2" cy="122.2" r="2.2"></circle>
                  <circle cx="50.2" cy="122.2" r="2.2"></circle>
                  <circle cx="266.2" cy="122.2" r="2.2"></circle>
                  <circle cx="74.2" cy="122.2" r="2.2"></circle>
                  <circle cx="290.2" cy="122.2" r="2.2"></circle>
                  <circle cx="98.2" cy="122.2" r="2.2"></circle>
                  <circle cx="314.2" cy="122.2" r="2.2"></circle>
                  <circle cx="122.2" cy="122.2" r="2.2"></circle>
                  <circle cx="338.2" cy="122.2" r="2.2"></circle>
                  <circle cx="146.2" cy="122.2" r="2.2"></circle>
                  <circle cx="170.2" cy="122.2" r="2.2"></circle>
                  <circle cx="194.2" cy="146.2" r="2.2"></circle>
                  <circle cx="2.2" cy="146.2" r="2.2"></circle>
                  <circle cx="218.2" cy="146.2" r="2.2"></circle>
                  <circle cx="26.2" cy="146.2" r="2.2"></circle>
                  <circle cx="242.2" cy="146.2" r="2.2"></circle>
                  <circle cx="50.2" cy="146.2" r="2.2"></circle>
                  <circle cx="266.2" cy="146.2" r="2.2"></circle>
                  <circle cx="74.2" cy="146.2" r="2.2"></circle>
                  <circle cx="290.2" cy="146.2" r="2.2"></circle>
                  <circle cx="98.2" cy="146.2" r="2.2"></circle>
                  <circle cx="314.2" cy="146.2" r="2.2"></circle>
                  <circle cx="122.2" cy="146.2" r="2.2"></circle>
                  <circle cx="338.2" cy="146.2" r="2.2"></circle>
                  <circle cx="146.2" cy="146.2" r="2.2"></circle>
                  <circle cx="170.2" cy="146.2" r="2.2"></circle>
                  <circle cx="194.2" cy="170.2" r="2.2"></circle>
                  <circle cx="2.2" cy="170.2" r="2.2"></circle>
                  <circle cx="218.2" cy="170.2" r="2.2"></circle>
                  <circle cx="26.2" cy="170.2" r="2.2"></circle>
                  <circle cx="242.2" cy="170.2" r="2.2"></circle>
                  <circle cx="50.2" cy="170.2" r="2.2"></circle>
                  <circle cx="266.2" cy="170.2" r="2.2"></circle>
                  <circle cx="74.2" cy="170.2" r="2.2"></circle>
                  <circle cx="290.2" cy="170.2" r="2.2"></circle>
                  <circle cx="98.2" cy="170.2" r="2.2"></circle>
                  <circle cx="314.2" cy="170.2" r="2.2"></circle>
                  <circle cx="122.2" cy="170.2" r="2.2"></circle>
                  <circle cx="338.2" cy="170.2" r="2.2"></circle>
                  <circle cx="146.2" cy="170.2" r="2.2"></circle>
                  <circle cx="170.2" cy="170.2" r="2.2"></circle>
                  <circle cx="194.2" cy="194.2" r="2.2"></circle>
                  <circle cx="2.2" cy="194.2" r="2.2"></circle>
                  <circle cx="218.2" cy="194.2" r="2.2"></circle>
                  <circle cx="26.2" cy="194.2" r="2.2"></circle>
                  <circle cx="242.2" cy="194.2" r="2.2"></circle>
                  <circle cx="50.2" cy="194.2" r="2.2"></circle>
                  <circle cx="266.2" cy="194.2" r="2.2"></circle>
                  <circle cx="74.2" cy="194.2" r="2.2"></circle>
                  <circle cx="290.2" cy="194.2" r="2.2"></circle>
                  <circle cx="98.2" cy="194.2" r="2.2"></circle>
                  <circle cx="314.2" cy="194.2" r="2.2"></circle>
                  <circle cx="122.2" cy="194.2" r="2.2"></circle>
                  <circle cx="338.2" cy="194.2" r="2.2"></circle>
                  <circle cx="146.2" cy="194.2" r="2.2"></circle>
                  <circle cx="170.2" cy="194.2" r="2.2"></circle>
                  <circle cx="194.2" cy="218.2" r="2.2"></circle>
                  <circle cx="2.2" cy="218.2" r="2.2"></circle>
                  <circle cx="218.2" cy="218.2" r="2.2"></circle>
                  <circle cx="26.2" cy="218.2" r="2.2"></circle>
                  <circle cx="242.2" cy="218.2" r="2.2"></circle>
                  <circle cx="50.2" cy="218.2" r="2.2"></circle>
                  <circle cx="266.2" cy="218.2" r="2.2"></circle>
                  <circle cx="74.2" cy="218.2" r="2.2"></circle>
                  <circle cx="290.2" cy="218.2" r="2.2"></circle>
                  <circle cx="98.2" cy="218.2" r="2.2"></circle>
                  <circle cx="314.2" cy="218.2" r="2.2"></circle>
                  <circle cx="122.2" cy="218.2" r="2.2"></circle>
                  <circle cx="338.2" cy="218.2" r="2.2"></circle>
                  <circle cx="146.2" cy="218.2" r="2.2"></circle>
                  <circle cx="170.2" cy="218.2" r="2.2"></circle>
                  <circle cx="194.2" cy="242.2" r="2.2"></circle>
                  <circle cx="2.2" cy="242.2" r="2.2"></circle>
                  <circle cx="218.2" cy="242.2" r="2.2"></circle>
                  <circle cx="26.2" cy="242.2" r="2.2"></circle>
                  <circle cx="242.2" cy="242.2" r="2.2"></circle>
                  <circle cx="50.2" cy="242.2" r="2.2"></circle>
                  <circle cx="266.2" cy="242.2" r="2.2"></circle>
                  <circle cx="74.2" cy="242.2" r="2.2"></circle>
                  <circle cx="290.2" cy="242.2" r="2.2"></circle>
                  <circle cx="98.2" cy="242.2" r="2.2"></circle>
                  <circle cx="314.2" cy="242.2" r="2.2"></circle>
                  <circle cx="122.2" cy="242.2" r="2.2"></circle>
                  <circle cx="338.2" cy="242.2" r="2.2"></circle>
                  <circle cx="146.2" cy="242.2" r="2.2"></circle>
                  <circle cx="170.2" cy="242.2" r="2.2"></circle>
                  <circle cx="194.2" cy="266.2" r="2.2"></circle>
                  <circle cx="2.2" cy="266.2" r="2.2"></circle>
                  <circle cx="218.2" cy="266.2" r="2.2"></circle>
                  <circle cx="26.2" cy="266.2" r="2.2"></circle>
                  <circle cx="242.2" cy="266.2" r="2.2"></circle>
                  <circle cx="50.2" cy="266.2" r="2.2"></circle>
                  <circle cx="266.2" cy="266.2" r="2.2"></circle>
                  <circle cx="74.2" cy="266.2" r="2.2"></circle>
                  <circle cx="290.2" cy="266.2" r="2.2"></circle>
                  <circle cx="98.2" cy="266.2" r="2.2"></circle>
                  <circle cx="314.2" cy="266.2" r="2.2"></circle>
                  <circle cx="122.2" cy="266.2" r="2.2"></circle>
                  <circle cx="338.2" cy="266.2" r="2.2"></circle>
                  <circle cx="146.2" cy="266.2" r="2.2"></circle>
                  <circle cx="170.2" cy="266.2" r="2.2"></circle>
                  <circle cx="194.2" cy="290.2" r="2.2"></circle>
                  <circle cx="2.2" cy="290.2" r="2.2"></circle>
                  <circle cx="218.2" cy="290.2" r="2.2"></circle>
                  <circle cx="26.2" cy="290.2" r="2.2"></circle>
                  <circle cx="242.2" cy="290.2" r="2.2"></circle>
                  <circle cx="50.2" cy="290.2" r="2.2"></circle>
                  <circle cx="266.2" cy="290.2" r="2.2"></circle>
                  <circle cx="74.2" cy="290.2" r="2.2"></circle>
                  <circle cx="290.2" cy="290.2" r="2.2"></circle>
                  <circle cx="98.2" cy="290.2" r="2.2"></circle>
                  <circle cx="314.2" cy="290.2" r="2.2"></circle>
                  <circle cx="122.2" cy="290.2" r="2.2"></circle>
                  <circle cx="338.2" cy="290.2" r="2.2"></circle>
                  <circle cx="146.2" cy="290.2" r="2.2"></circle>
                  <circle cx="170.2" cy="290.2" r="2.2"></circle>
                  <circle cx="194.2" cy="314.2" r="2.2"></circle>
                  <circle cx="2.2" cy="314.2" r="2.2"></circle>
                  <circle cx="218.2" cy="314.2" r="2.2"></circle>
                  <circle cx="26.2" cy="314.2" r="2.2"></circle>
                  <circle cx="242.2" cy="314.2" r="2.2"></circle>
                  <circle cx="50.2" cy="314.2" r="2.2"></circle>
                  <circle cx="266.2" cy="314.2" r="2.2"></circle>
                  <circle cx="74.2" cy="314.2" r="2.2"></circle>
                  <circle cx="290.2" cy="314.2" r="2.2"></circle>
                  <circle cx="98.2" cy="314.2" r="2.2"></circle>
                  <circle cx="314.2" cy="314.2" r="2.2"></circle>
                  <circle cx="122.2" cy="314.2" r="2.2"></circle>
                  <circle cx="338.2" cy="314.2" r="2.2"></circle>
                  <circle cx="146.2" cy="314.2" r="2.2"></circle>
                  <circle cx="170.2" cy="314.2" r="2.2"></circle>
                  <circle cx="194.2" cy="338.2" r="2.2"></circle>
                  <circle cx="2.2" cy="338.2" r="2.2"></circle>
                  <circle cx="218.2" cy="338.2" r="2.2"></circle>
                  <circle cx="26.2" cy="338.2" r="2.2"></circle>
                  <circle cx="242.2" cy="338.2" r="2.2"></circle>
                  <circle cx="50.2" cy="338.2" r="2.2"></circle>
                  <circle cx="266.2" cy="338.2" r="2.2"></circle>
                  <circle cx="74.2" cy="338.2" r="2.2"></circle>
                  <circle cx="290.2" cy="338.2" r="2.2"></circle>
                  <circle cx="98.2" cy="338.2" r="2.2"></circle>
                  <circle cx="314.2" cy="338.2" r="2.2"></circle>
                  <circle cx="122.2" cy="338.2" r="2.2"></circle>
                  <circle cx="338.2" cy="338.2" r="2.2"></circle>
                  <circle cx="146.2" cy="338.2" r="2.2"></circle>
                  <circle cx="170.2" cy="338.2" r="2.2"></circle>
                </svg>
              </figure>
              <img
                src={aboutImage}
                className="rounded-3 position-relative"
                data-aos="fade-up"
                alt=""
              />

              {/* Client rating START */}
              <div
                className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5"
                data-aos="fade-down"
              >
                <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3">
                  {/* Avatar group */}
                  <div className="me-4">
                    <h6 className="fw-light">Customer</h6>
                    <ul className="avatar-group mb-0">
                      <li className="avatar avatar-sm">
                        <div className="avatar-img rounded-circle bg-primary">
                          <span className="text-white position-absolute top-50 start-50 translate-middle small">
                            1K+
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Rating */}
                  <div>
                    <h6 className="fw-light mb-3">Ratings</h6>
                    <h6 className="m-0">
                      4.8
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={halfStar} alt="star" />
                    </h6>
                  </div>
                </div>
              </div>
              {/* Client rating END */}
            </div>
            {/* Left side END */}

            {/* Right side START */}
            <div className="col-lg-6 pb-5">
              <h2 className="mb-3 mb-lg-5">Your Ultimate Business Partner!</h2>
              <p className="mb-3 mb-lg-5">
                Fugit established in 2021.It is a Partnership firm with multiple
                business intentions. We offers multiple service under one roof, which
                includes Car rental services, Manpower consulting, Tours and travels,
                E catering, Organic foods and corporate Gifts.
              </p>

              {/* Features START */}
              <div className="row g-4">
                {/* Item */}
                <div className="col-sm-6" data-aos="fade-right">
                  <div className="icon-lg bg-success bg-opacity-10 text-success rounded-circle">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <h5 className="mt-2">Quality and Reliability</h5>
                  <p className="mb-0">
                    We take pride in offering high-quality vehicles and reliable
                    services that meet and exceed our customers' expectations. time.
                  </p>
                </div>
                {/* Item */}
                <div className="col-sm-6" data-aos="fade-left">
                  <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle">
                    <span className="material-symbols-outlined">mood</span>
                  </div>
                  <h5 className="mt-2">Personalized Service</h5>
                  <p className="mb-0">
                    At Fugit, Our team is committed to providing personalized service
                    that caters to your unique needs and preferences.
                  </p>
                </div>
                {/* Item */}
                <div className="col-sm-6" data-aos="fade-right">
                  <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle">
                    <span className="material-symbols-outlined">car_tag</span>
                  </div>
                  <h5 className="mt-2">Competitive Rates</h5>
                  <p className="mb-0">
                    We offer competitive rates and transparent pricing with no hidden
                    fees, ensuring that you get the best value for your money.
                  </p>
                </div>
                {/* Item */}
                <div className="col-sm-6" data-aos="fade-left">
                  <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <h5 className="mt-2">24/7 Customer Support</h5>
                  <p className="mb-0">
                    We offer round-the-clock customer support to assist you with any
                    queries or concerns you may have before, during, or after your
                    rental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features END */}
      </section>
    </>
  );
};

export default AboutUs;
