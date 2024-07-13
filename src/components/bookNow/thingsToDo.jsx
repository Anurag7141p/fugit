import React, { useState } from "react";

const ThingsToDo = () => {

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
              placeholder="Going to?"
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

        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default ThingsToDo;
