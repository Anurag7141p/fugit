import React from "react";

const OurServices = ({ ourServices }) => {
  const { head, description, description2 } = ourServices;
  return (
    <section className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 mx-auto text-center">
            {/* Title */}
            <h4 className="opacity-2" data-aos="fade-down">
              Our Services
            </h4>
            <h1 data-aos="fade-down">{head}</h1>
            <p className="lead" data-aos="fade-up">
              {description}
            </p>
            {description2 ? (
              <p className="lead" data-aos="fade-up">
                {description2}
              </p>
            ) : null}
          </div>
        </div>
        {/* Row END */}
      </div>
    </section>
  );
};

export default OurServices;
