import React from "react";
import OurServices from "../components/reusable/ourServices";
import ContactSection from "../components/reusable/contactSection";
import ServicesSection from "../components/reusable/servicesSection";

const ManpowerConsulting = () => {
  const ourServices = {
    head: "Manpower consulting",
    description:
      "Serve man power across Bangalore. We are providing best talented man power in the field of securities, housekeeping, drivers and floor staff.",
    description2:
      "We partner up with companies to fill up their vacancies. We act as a link between our clients and potential candidates. Our services are always available for corporate offices, wedding venue, event managements.",
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

export default ManpowerConsulting;
