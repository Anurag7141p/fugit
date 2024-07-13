import React, { useState } from "react";

import Travalers from "./travalers";

const Stays = () => {
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
      <div className="options">
        <label>
          <input type="checkbox" /> Add a flight
        </label>
        <label>
          <input type="checkbox" /> Add a car
        </label>
      </div>
    </div>
  );
};

export default Stays;
