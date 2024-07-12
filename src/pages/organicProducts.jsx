import React from "react";
import OurServices from "../components/reusable/ourServices";
import ContactSection from "../components/reusable/contactSection";
import ServicesSection from "../components/reusable/servicesSection";

const OrganicProducts = () => {
  const ourServices = {
    head: "Organic Products",
    description:
      "We provide a wide variety of organic foods directly from farmers. Our aim is to excel through quality and consistency. Our aim of providing organic products to keep you away from toxins and give highest quality nutrition which keeps you healthy and fit.",
  };
  const contactDetails = {
    head: "Need to know more?",
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
      icon: "featured_seasonal_and_gifts",
      head: "Corporate Gifts",
      sub_head: "Elevate Your Corporate Connections with Thoughtful Gifts",
      description:
        "Corporate Gifting is more than a gesture; it's a heartfelt expression of gratitude towards your valued employees and clients.",
      color: "orange",
      background_color: "orange",
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

export default OrganicProducts;
