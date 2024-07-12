import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({
  icon,
  head,
  sub_head,
  description,
  index,
  link,
  color,
  background_color,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Adjust the animation duration (ms)
      once: true, // Only animate once
    });
  }, []);

  return (
    <>
      <div
        key={index}
        className="col-sm-6 col-lg-4"
        data-aos={`fade-up${index % 2 === 0 ? "right" : "-left"}`}
      >
        <div
          className={`card card-body bg-${background_color} bg-opacity-10 shadow p-4 p-xl-5 h-100`}
        >
          <div
            className={`icon-lg bg-opacity-10   rounded-circle mb-4 bg-${color} `}
          >
            <span className={`material-symbols-outlined text-${color}`}>{icon}</span>
          </div>
          <h5>{head}</h5>
          <p className="fw-bold">{sub_head}</p>
          <p className="mb-0">{description}</p>
          <a className="mt-3" href={link}>
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
