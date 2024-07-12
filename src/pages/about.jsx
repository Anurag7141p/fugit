import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceItem from "../components/reusable/serviceItem";
import Content from "../components/about/content";
import ImageSection from "../components/about/imageSection";
import Hero from "../components/about/hero";

const About = () => {
  const serviceItems = [
    {
      style: "bg-orange text-orange",
      anim: "fade-down",
      icon: "hotel",
      serviceHead: "Hotel Booking",
      serviceDesc:
        "Book hotels effortlessly with us. Find the perfect stay, compare options, and enjoy seamless reservations. Your comfort is our priority.",
    },
    {
      style: " bg-success  text-success",
      anim: "fade-up",
      icon: "flightsmode",
      serviceHead: "Flight Booking",
      serviceDesc:
        "Securely book flights worldwide with ease. Find deals, compare options, and enjoy 24/7 support. Start your journey now!",
    },
    {
      style: " bg-primary text-primary",
      anim: "fade-down",
      icon: "luggage",
      serviceHead: "Tour Booking",
      serviceDesc:
        " Discover exciting destinations hassle-free. Book customized tours, explore iconic landmarks, and create unforgettable memories with ease. Start your adventure now!",
    },
    {
      style: "bg-info  text-info ",
      anim: "fade-up",
      icon: "local_taxi",
      serviceHead: "Cab Booking",
      serviceDesc:
        "Easily book your ideal car rental. Choose from diverse options, competitive rates, and seamless service. Begin your journey today!",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 500, // Adjust the animation duration (ms)
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <Hero
            subheading="About Us"
            heading="Your Ultimate Car Rental and Travel Partner!"
            description="Fugit established in 2021. It is a Partnership firm with multiple business intentions. We offers multiple service under one roof, which includes Car rental services, Manpower consulting, Tours and travels, E catering, Organic foods and corporate Gifts."
          />

          <ImageSection />
        </div>
      </section>

      <section className="pt-0 py-lg-5">
        <div className="container pb-lg-5">
          <Content />

          <div className="row g-4 pt-5">
            {serviceItems.map((item, index) => (
              <ServiceItem
                key={index}
                style={item.style}
                anim={item.anim}
                icon={item.icon}
                serviceHead={item.serviceHead}
                serviceDesc={item.serviceDesc}
              />
            ))}
          </div>
          {/* Services END */}
        </div>
      </section>
    </>
  );
};

export default About;
