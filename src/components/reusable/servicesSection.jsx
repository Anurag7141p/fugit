import React from "react";
import Card from "./card";

const ServicesSection = ({ cardData, head }) => {
  console.log(cardData);
  return (
    <section className="py-0 py-lg-7 ">
      <div className="container py-5">
        {/* Title */}
        <div className="row mb-3 mb-sm-4">
          <div className="col-12 text-center">{head ? <h2>{head}</h2> : null}</div>
        </div>

        <div className="row g-4">
          {/* Map through cardData to create cards dynamically */}
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        {/* Row END */}
      </div>
    </section>
  );
};

export default ServicesSection;
