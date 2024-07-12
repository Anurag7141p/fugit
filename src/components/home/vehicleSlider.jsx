import React, { useEffect } from "react";
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider";
import GLightbox from "glightbox"; // Import glightbox
import "glightbox/dist/css/glightbox.min.css"; // Import glightbox CSS
import car1 from "../../assets/img/category/hotel/gallery/01.jpg";
import car2 from "../../assets/img/category/hotel/gallery/02.jpg";
import car3 from "../../assets/img/category/hotel/gallery/03.jpg";
import car4 from "../../assets/img/category/hotel/gallery/04.jpg";
import car5 from "../../assets/img/category/hotel/gallery/05.jpg";
import car6 from "../../assets/img/category/hotel/gallery/06.jpg";
import car7 from "../../assets/img/category/hotel/gallery/07.jpg";
import "./VehicleSlider.css"; // Import the CSS file

const VehicleSlider = () => {
  const images = [car1, car2, car3, car4, car5, car6, car7];

  useEffect(() => {
    const slider = tns({
      container: ".tiny-slider-inner",
      items: 7,
      autoplay: true,
      autoplayTimeout: 3000, // Time between slides in milliseconds
      autoplayHoverPause: true, // Pause on hover
      controls: true, // Ensure this is set to true to show arrows
      controlsText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
      nav: false, // Disable dots
      autoplayButtonOutput: false, // Disable autoplay buttons
      responsive: {
        240: { items: 2 },
        768: { items: 4 },
        1024: { items: 6 },
      },
    });
    const lightbox = GLightbox({
      selector: "a[data-glightbox]",
      touchNavigation: true,
      loop: true,
      closeButton: true, // Ensure the close button is enabled
    });

    return () => {
      slider.destroy();
      lightbox.destroy();
    };

    return () => slider.destroy();
  }, []);

  return (
    <section>
      <div className="container-fluid">
        {/* Title */}
        <div className="row mb-md-4">
          <div className="col-12 mx-auto text-center mb-4">
            <h2 className="mb-0">Our Range of Vehicles</h2>
          </div>
        </div>

        {/* Slider START */}
        <div className="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
          <div
            className="tiny-slider-inner d-flex align-items-end"
            data-autoplay="true"
            data-edge="2"
            data-arrow="true"
            data-dots="false"
            data-items="6"
            data-items-lg="4"
            data-items-sm="2"
          >
            {images.map((image, index) => (
              <div key={index}>
                <a data-glightbox="" data-gallery="gallery" href={image}>
                  <div className="card card-element-hover card-overlay-hover overflow-hidden">
                    {/* Image */}
                    <img src={image} className="rounded-3 slider-image" alt="" />
                    {/* Full screen button */}
                    <div className="hover-element w-100 h-100">
                      <span className="material-symbols-outlined fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1">
                        fullscreen
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Slider END */}
      </div>
    </section>
  );
};

export default VehicleSlider;
