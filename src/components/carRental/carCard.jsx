import React from "react";

const CarCard = ({ src, category }) => {
  return (
    <div className="col-6 col-sm-4 col-lg-3">
      <div className="card d-block bg-transparent text-center p-1 h-100">
        {/* Image */}
        <img
          src={src}
          style={{ height: "120px", width: "120px" }}
          className="rounded-circle d-inline-block"
          alt={category}
        />

        <div className="card-body p-0 pt-3">
          <h6 className="card-title">
            <a href="#" className="stretched-link">
              {category}
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
