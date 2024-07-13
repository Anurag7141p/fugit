import React, { useState } from "react";

import Travalers from "./travalers";

const Flights = () => {
  const [flightType, setFlightType] = useState("Roundtrip");

  return (
    <div className="flight-tab-content">
      <div className="flight-controls">
        <div className="tabs flight_tab">
          <button
            className={flightType === "Roundtrip" ? "active" : ""}
            onClick={() => setFlightType("Roundtrip")}
          >
            Roundtrip
          </button>
          <button
            className={flightType === "Oneway" ? "active" : ""}
            onClick={() => setFlightType("Oneway")}
          >
            One-way
          </button>
        </div>
        <div className="class-type">
          <select className="class-dropdown">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
      </div>

      {flightType == "Roundtrip" && (
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
          <div className="options">
            <label>
              <input type="checkbox" /> Add a place to stay
            </label>
            <label>
              <input type="checkbox" /> Add a car
            </label>
          </div>
        </div>
      )}

      {flightType == "Oneway" && (
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
      )}
    </div>
  );
};

export default Flights;
