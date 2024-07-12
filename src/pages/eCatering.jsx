import React from "react";
import OurServices from "../components/reusable/ourServices";
import ContactSection from "../components/reusable/contactSection";
import ServicesSection from "../components/reusable/servicesSection";

const ECatering = () => {
  const ourServices = {
    head: "E-Catering",
    description:
      "It is an initiative of delivering home cooked food. Enjoy home cooked vegetarian and non Vegetarian menu without any added preservatives. Your never ending love for home made food matters to us. Services also include multistate and multi cuisine menu. We alter the food alternations according to the choice of the customers.",
  };
  const contactDetails = {
    head: "We cater different state foods. Need to know more?",
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
      icon: "emoji_transportation",
      head: "Tours and Travels",
      sub_head: "Embark on Unforgettable Journeys with Fugit Tours and Travels",
      description:
        "Our enticing tour packages span across the diverse landscapes of India, ensuring a seamless blend of culture, adventure, and relaxation.",
      color: "success",
      background_color: "success",
    },
    {
      icon: "engineering ",
      head: "Manpower consulting",
      sub_head: "Empowering Businesses with Exceptional Manpower Solutions",
      description:
        "We take pride in offering top-tier talent in key areas such as security personnel, housekeeping staff, skilled drivers, and proficient floor staff.",
      color: "warning",
      background_color: "warning",
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

export default ECatering;
