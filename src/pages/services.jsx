import React from "react";
import OurServices from "../components/reusable/ourServices";
import ServicesSection from "../components/reusable/servicesSection";
import ServiceItem from "../components/reusable/serviceItem";

const Services = () => {
  const cardData = [
    {
      icon: "local_taxi",
      head: "Premium Car Rental ",
      sub_head: "Experience Exceptional Luxury with Fugit Car Rentals",
      description:
        "Discover unparalleled premium car rental services tailored to cater to the distinct needs of our esteemed corporate clients, tour operators, and event management professionals.",
      link: "premium-car-rental.html",
      color: "primary",
      background_color: "primary",
    },
    {
      icon: "emoji_transportation",
      head: "Tours and Travels",
      sub_head: "Embark on Unforgettable Journeys with Fugit Tours and Travels",
      description:
        "Our enticing tour packages span across the diverse landscapes of India, ensuring a seamless blend of culture, adventure, and relaxation.",
      link: "tours-and-travels.html",
      color: "success",
      background_color: "success",
    },
    {
      icon: " engineering",
      head: "Manpower Consulting",
      sub_head: "Empowering Businesses with Exceptional Manpower Solutions",
      description:
        "We take pride in offering top-tier talent in key areas such as security personnel, housekeeping staff, skilled drivers, and proficient floor staff.",
      link: "manpower-consulting.html",
      color: "warning",
      background_color: "warning",
    },
    {
      icon: "skillet",
      head: "E-Catering",
      sub_head: "Indulge in the Culinary Delights of E-Catering",
      description:
        "Welcome to Fugit E-Catering platform, a dedicated initiative aimed at bringing the wholesome goodness of home-cooked meals straight to your doorstep.",
      link: "e-catering.html",
      color: "danger",
      background_color: "danger",
    },
    {
      icon: " featured_seasonal_and_gifts",

      head: "Corporate Gifts",
      sub_head: "Elevate Your Corporate Connections with Thoughtful Gifts",
      description:
        "Corporate Gifting is more than a gesture; it's a heartfelt expression of gratitude towards your valued employees and clients.",
      link: "corporate-gifts.html",
      color: "orange",
      background_color: "orange",
    },
    {
      icon: "compost",
      head: "Organic Products",
      sub_head: "Your Source for Premium Organic Products",
      description:
        "Our commitment is centered around excellence in quality and consistency, providing you with the very best nature has to offer.",
      link: "organic-products.html",
      color: "info",
      background_color: "info",
    },
  ];

  const ourServices = {
    head: "Elevate Your Travel Experience with Our Comprehensive Services",
    description:
      "Our range of services is designed to enhance every aspect of your travel experience, from seamless car rentals to convenient airport transfers and tailored travel packages. Discover how we can elevate your travel experience and make every mile memorable.",
  };

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

  // const head = "Explore Our Other Services";

  return (
    <div>
      <OurServices ourServices={ourServices} />
      <ServicesSection cardData={cardData} />
      <div className="pt-0 py-lg-5">
        <div className="container pb-lg-5">
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
        </div>
      </div>
    </div>
  );
};

export default Services;
