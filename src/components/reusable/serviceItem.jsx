import React from "react";

const ServiceItem = ({ style, anim, icon, serviceHead, serviceDesc }) => {
  return (
    <div className="col-sm-6 col-lg-3" data-aos={`${anim}`}>
      <div className={`icon-lg  bg-opacity-10  rounded-2 ${style}`}>
        <span className="material-symbols-outlined"> {icon} </span>
      </div>
      <h5 className="mt-2">{serviceHead}</h5>
      <p className="mb-0">{serviceDesc}</p>
    </div>
  );
};

export default ServiceItem;
