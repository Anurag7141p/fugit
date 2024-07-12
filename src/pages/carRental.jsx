import React from "react";
import OurServices from "../components/reusable/ourServices";
import ContactSection from "../components/reusable/contactSection";
import ServicesSection from "../components/reusable/servicesSection";
import ExploreCar from "../components/carRental/exploreCar";

const CarRental = () => {
  const ourServices = {
    head: "Premium Car Rental",
    description:
      "Premium car rental with the aim of serving our corporate customers, tour operators and event managements. Fugit car offers chauffeur driven standard, premium and high Premium cars. We offer weekend road trips, long term rental and tour Packages. Our services are 24/7 with Professional and personalized services.",
    description2:
      "High quality service are customized to suit your specific business needs with dedicated key account that offer 'just a call away'/ mail convenience for anytime, anywhere travelling.",
  };
  const contactDetails = {
    head: "Still, Have a Question?",
    description: "You can Call us on below number to discuss more",
    number1: "9972519906",
    number2: "9686018281",
  };

  const cardData = [
    {
      icon: "local_taxi",
      head: "Tours and Travels ",
      sub_head: "Embark on Unforgettable Journeys with Fugit Tours and Travels",
      description:
        "Our enticing tour packages span across the diverse landscapes of India, ensuring a seamless blend of culture, adventure, and relaxation.",
      color: "success",
      background_color: "success",
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
      <ExploreCar/>
      <ContactSection contactDetails={contactDetails} />
      <ServicesSection cardData={cardData} head={head} />
    </div>
  );
};

export default CarRental;
