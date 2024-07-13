import React from "react";
import Travalers from "./travalers";
const Packages = () => {
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
              <input
                type="text"
                className="destination"
                id="destination1"
                name="destination"
                placeholder="Date"
              />
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
