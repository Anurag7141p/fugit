import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
// Import PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme you prefer
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS
import "primeflex/primeflex.css"; // PrimeFlex CSS (Optional)
import Transportation from "./transportation";

const Cars = () => {
  const [flightType, setFlightType] = useState("Rentalcars");
  const [date, setDate] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.value);
  };

  return (
    <div className="flight-tab-content">
      <div className="flight-controls">
        <div className="tabs flight_tab">
          <button
            className={flightType === "Rentalcars" ? "active" : ""}
            onClick={() => setFlightType("Rentalcars")}
          >
            Rental Cars
          </button>
          <button
            className={flightType === "Trasportation" ? "active" : ""}
            onClick={() => setFlightType("Trasportation")}
          >
            Airport Trasportation
          </button>
        </div>
      </div>

      {flightType == "Rentalcars" && (
        <div className="tab__content-item">
          <div className="search-box" id="search-box">
            <div className="input-group">
              <div className="location-field">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ fontSize: "24px" }}
                ></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Leaving From"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="location-field">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ fontSize: "24px" }}
                ></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Going from"
                />
              </div>
            </div>

            <div className="input-group">
              <div className="location-field">
                <i
                  className="fa fa-calendar"
                  aria-hidden="true"
                  style={{ fontSize: "24px" }}
                ></i>
                <Calendar
                  value={date}
                  onChange={handleDateChange}
                  selectionMode="range"
                  numberOfMonths={2}
                  className="date_picker"
                  placeholder="07/10/2024 - 08/11/2024"
                ></Calendar>
              </div>
            </div>

            <div className="input-group">
              <div className="location-field">
                <i
                  className="fa-solid fa-clock"
                  aria-hidden="true"
                  style={{ fontSize: "24px" }}
                ></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Pickup time"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="location-field">
                <i
                  className="fa-solid fa-clock"
                  aria-hidden="true"
                  style={{ fontSize: "24px" }}
                ></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Dropoff time"

                />
              </div>
            </div>
          </div>
          <button className="search-button">Search</button>

          <div className="options car_bottom_btn">
            <button> Show AAP Rate</button>
            <button> Discount Code</button>
          </div>
        </div>
      )}

      {flightType == "Trasportation" && <Transportation />}
    </div>
  );
};

export default Cars;
