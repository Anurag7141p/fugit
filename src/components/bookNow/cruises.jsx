import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
// Import PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme you prefer
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS
import "primeflex/primeflex.css"; // PrimeFlex CSS (Optional)
import Travalers from "./travalers";

const Cruises = () => {
  const [date, setDate] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.value);
  };
  return (
    <div className="tab__content-item">
      <div className="search-box" id="search-box">
        <div className="input-group">
          <div className="location-field">
            <i className="fa-solid fa-location-dot" style={{ fontSize: "24px" }}></i>
            <input
              type="text"
              className="destination"
              id="destination1"
              name="destination"
              placeholder="Where to?"
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
              placeholder="Departure Between"
            ></Calendar>
          </div>
        </div>

        <div className="input-group">
          <Travalers />
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
              placeholder="Duration"
            />
          </div>
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Cruises;
