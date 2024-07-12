import React, { useEffect } from "react";
import heroImage1 from "../../assets/img/hero/01.jpg";
import heroImage2 from "../../assets/img/hero/02.jpg";
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider/src/tiny-slider";

const MainBanner = () => {
  useEffect(() => {
    const _slider = tns({
      container: ".tiny-slider-inner1",
      items: 1,
      slideBy: "1",
      autoplay: true,
      controlsText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
      controls: true, // Enable controls
      nav: false,
      autoplayButtonOutput: false, // Disable start/stop buttons
    });
  }, []);

  return (
    <section className="py-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
              <div className="tiny-slider-inner1" data-gutter="0">
                {/* Slider Items */}
                <div
                  className="card overflow-hidden h-400px h-sm-600px rounded-0"
                  style={{
                    backgroundImage: `url(${heroImage1})`,
                    backgroundPosition: "center left",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="bg-overlay bg-dark opacity-3"></div>
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                      <div className="row">
                        <div className="col-11 col-lg-7">
                          <h6 className="text-white fw-normal mb-0">
                            💖 Fall in love with the City
                          </h6>
                          <h1 className="text-white display-6">
                            Exceptional Luxury with Fugit Car Rentals
                          </h1>
                          <a href="contact-us.html" className="btn btn-primary mb-0">
                            Reserve Today
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Slide */}
                <div
                  className="card overflow-hidden h-400px h-sm-600px rounded-0"
                  style={{
                    backgroundImage: `url(${heroImage2})`,
                    backgroundPosition: "center left",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="bg-overlay bg-dark opacity-3"></div>
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="container">
                      <div className="row">
                        <div className="col-11 col-lg-7">
                          <h6 className="text-white fw-normal mb-0">
                            💖 Fall in love with the City
                          </h6>
                          <h1 className="text-white display-6">
                            Your Ultimate Tour & Travel Partner!
                          </h1>
                          <a href="contact-us.html" className="btn btn-primary mb-0">
                            Reserve Today
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
