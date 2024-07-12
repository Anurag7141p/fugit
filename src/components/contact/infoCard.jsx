// import { useEffect } from 'react';
import PropTypes from "prop-types";
// import { AOS } from 'aos';
// import 'aos/dist/aos.css';

const InfoCard = ({ title, bgColor, address, phoneNumbers, email, supportTime }) => {
  // useEffect(() => {
  //     AOS.init({
  //         duration: 500, // Adjust the animation duration (ms)
  //         once: true, // Only animate once
  //     });
  // }, []);

  return (
    <div className={`col-sm-6 col-lg-4`} data-aos="fade-up-right">
      <div
        className={`card card-body ${bgColor} bg-opacity-10 p-4 h-100 border-0 w-100`}
      >
        <h5 className="mb-3">{title}</h5>
        {title === "Address" ? (
          <>
            <p className="lead mb-2 fw-bold">Fugit</p>
            <address className="mb-1">{address}</address>
          </>
        ) : (
          <>
            <p className="mb-1">
              Call: {phoneNumbers[0]} <span className="text-muted">/</span>{" "}
              {phoneNumbers[1]}
            </p>
            <p className="mb-1">Email: {email}</p>
            <p>Support Time : {supportTime}</p>
          </>
        )}
        <div></div>
      </div>
    </div>
  );
};
InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  address: PropTypes.string,
  phoneNumbers: PropTypes.arrayOf(PropTypes.string),
  email: PropTypes.string,
  supportTime: PropTypes.string,
};

export default InfoCard;
