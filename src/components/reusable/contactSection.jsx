import React from "react";

const ContactSection = ({ contactDetails }) => {
  const { head, sub_head, description, number1, number2 } = contactDetails;
  return (
    <section>
      <div className="container">
        <div className="bg-primary bg-opacity-10 rounded-3 p-4 p-sm-5">
          <div className="row align-items-center position-relative">
            <div className="col-12">
              {/* Title */}
              <div className="mb-2">
                <h5 className="text-primary text-center">{head}</h5>
              </div>
              {sub_head ? (
                <div className="mb-3 ">
                  <h5 className="text-black pt-1 pb-2 text-center">{sub_head}</h5>
                </div>
              ) : null}
              <p className="lead mb-lg-0 text-center">{description}</p>
              <h4 className="mt-2 text-center">
                +91 {number1} <span className="text-muted">/</span> +91 {number2}
              </h4>
            </div>
          </div>{" "}
          {/* Row END */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
