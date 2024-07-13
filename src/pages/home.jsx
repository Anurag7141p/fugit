import React from "react";
import MainBanner from "../components/home/mainBanner";
import AboutUs from "../components/home/aboutUs";
import ServiceReview from "../components/home/serviceReview";
import Mission from "../components/home/mission";
import ServicesSection from "../components/reusable/servicesSection";
import VehicleSlider from "../components/home/vehicleSlider";

const Home = () => {
  const cardData = [
    {
      icon: "local_taxi",
      head: "Premium Car Rental ",
      sub_head: "Experience Exceptional Luxury with Fugit Car Rentals",
      description:
        "Discover unparalleled premium car rental services tailored to cater to the distinct needs of our esteemed corporate clients, tour operators, and event management professionals.",
      link: "premium-car-rental.html",
      color: "",
      background_color: "bg-white",
    },
    {
      icon: "emoji_transportation",
      head: "Tours and Travels",
      sub_head: "Embark on Unforgettable Journeys with Fugit Tours and Travels",
      description:
        "Our enticing tour packages span across the diverse landscapes of India, ensuring a seamless blend of culture, adventure, and relaxation.",
      link: "tours-and-travels.html",
      color: "success",
      background_color: "bg-white",
    },
    {
      icon: " engineering",
      head: "Manpower Consulting",
      sub_head: "Empowering Businesses with Exceptional Manpower Solutions",
      description:
        "We take pride in offering top-tier talent in key areas such as security personnel, housekeeping staff, skilled drivers, and proficient floor staff.",
      link: "manpower-consulting.html",
      color: "warning",
      background_color: "bg-white",
    },
    {
      icon: "skillet",
      head: "E-Catering",
      sub_head: "Indulge in the Culinary Delights of E-Catering",
      description:
        "Welcome to Fugit E-Catering platform, a dedicated initiative aimed at bringing the wholesome goodness of home-cooked meals straight to your doorstep.",
      link: "e-catering.html",
      color: "danger",
      background_color: "bg-white",
    },
    {
      icon: " featured_seasonal_and_gifts",

      head: "Corporate Gifts",
      sub_head: "Elevate Your Corporate Connections with Thoughtful Gifts",
      description:
        "Corporate Gifting is more than a gesture; it's a heartfelt expression of gratitude towards your valued employees and clients.",
      link: "corporate-gifts.html",
      color: "orange",
      background_color: "bg-white",
    },
    {
      icon: "compost",
      head: "Organic Products",
      sub_head: "Your Source for Premium Organic Products",
      description:
        "Our commitment is centered around excellence in quality and consistency, providing you with the very best nature has to offer.",
      link: "organic-products.html",
      color: "info",
      background_color: "bg-white",
    },
  ];
  const head = "Elevate Your Travel Experience with Our Comprehensive Services";
  return (
    <div>
      <MainBanner />
      <AboutUs />
      <VehicleSlider/>
      <ServicesSection cardData={cardData} head={head} />
      <ServiceReview />
      <Mission />
    </div>
  );
};

export default Home;
