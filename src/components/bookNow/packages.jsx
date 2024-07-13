import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
// Import PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme you prefer
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS
import "primeflex/primeflex.css"; // PrimeFlex CSS (Optional)
import Travalers from "./travalers";

const Packages = () => {
  const [date, setDate] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.value);
  };

  return (
    <div className="flight-tab-content">
      <div className="flight-controls">
        <div className="package_tab_list">
          <button>Stay Added</button>
          <button>Flight Added</button>
          <button>Car</button>
          <button>Economy</button>
        </div>
      </div>

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
            <Travalers />
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
