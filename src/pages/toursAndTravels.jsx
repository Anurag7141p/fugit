import React from "react";
import OurServices from "../components/reusable/ourServices";
import ContactSection from "../components/reusable/contactSection";
import ServicesSection from "../components/reusable/servicesSection";

const ToursAndTravels = () => {
  const ourServices = {
    head: "Tours And Travels",
    description:
      "Fugit provides great trips for all travellers. We provide tour packages across India, We offers best deals on Hotel booking, customized holiday's, Transport and sightseeing services to all the holiday destination of India We use our skills to buy the best service for your money. So you may look forward to have a great holiday along with excellent standard of service.",
  };
  const contactDetails = {
    head: "Include Air ticketing, train ticketing & Visa etc",
    sub_head: "Tour package National & international ( We Provide guide)",
    description: "You can Call us on below number to discuss more",
    number1: "9972519906",
    number2: "9686018281",
  };

  const cardData = [
    {
      icon: "local_taxi",
      head: "Premium Car Rental ",
      sub_head: "Experience Exceptional Luxury with Fugit Car Rentals",
      description:
        "Discover unparalleled premium car rental services tailored to cater to the distinct needs of our esteemed corporate clients, tour operators, and event management professionals.",
      color: "primary",
      background_color: "primary",
    },
    {
      icon: "engineering",
      head: "Manpower consulting",
      sub_head: "Empowering Businesses with Exceptional Manpower Solutions",
      description:
        "We take pride in offering top-tier talent in key areas such as security personnel, housekeeping staff, skilled drivers, and proficient floor staff.",
      color: "warning",
      background_color: "warning",
    },
    {
      icon: "skillet ",
      head: "E-Catering",
      sub_head: "Indulge in the Culinary Delights of E-Catering",
      description:
        "Welcome to Fugit E-Catering platform, a dedicated initiative aimed at bringing the wholesome goodness of home-cooked meals straight to your doorstep.",
      color: "danger",
      background_color: "danger",
    },
  ];

  const head = "Explore Our Other Services";

  return (
    <div>
      <OurServices ourServices={ourServices} />
      <ContactSection contactDetails={contactDetails} />
      <ServicesSection cardData={cardData} head={head} />
    </div>
  );
};

export default ToursAndTravels;
