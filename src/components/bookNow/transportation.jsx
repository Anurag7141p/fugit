import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
// Import PrimeReact CSS
import "primereact/resources/themes/saga-blue/theme.css"; // Choose a theme you prefer
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS
import "primeflex/primeflex.css"; // PrimeFlex CSS (Optional)
import Travalers from "./travalers";

const Transportation = () => {
  const [flightType, setFlightType] = useState("AirportToHotel");
  const [date, setDate] = useState(null);

  const handleDateChange = (e) => {
    setDate(e.value);
  };
  return (
    <div className="flight-tab-content">
      <div className="flight-controls">
        <div className=" trasportation_tab">
          <button
            className={flightType === "AirportToHotel" ? "active" : ""}
            onClick={() => setFlightType("AirportToHotel")}
          >
            Airport to Hotel
          </button>
          <button
            className={flightType === "HotelToAirport" ? "active" : ""}
            onClick={() => setFlightType("HotelToAirport")}
          >
            Hotel to Airport
          </button>
          <button
            className={flightType === "Roundtrip" ? "active" : ""}
            onClick={() => setFlightType("Roundtrip")}
          >
            Roundtrip
          </button>
        </div>
      </div>

      {flightType == "AirportToHotel" && (
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
                  placeholder="Airport"
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
                  placeholder="Hotel"
                />
              </div>
            </div>
          </div>
          <div className="search-box" id="search-box">
            <div className="input-group">
              <Travalers />
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
                  placeholder="Flight Arrival Date"
                ></Calendar>
              </div>
            </div>
            <div className="input-group">
              <div className="location-field">
                <i className="fa-solid fa-clock" style={{ fontSize: "24px" }}></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Flight arrival time"
                />
              </div>
            </div>
          </div>
          <button className="search-button">Search</button>
        </div>
      )}

      {flightType == "HotelToAirport" && (
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
                  placeholder="Hotel"
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
                  placeholder="Airport"
                />
              </div>
            </div>
          </div>
          <div className="search-box" id="search-box">
            <div className="input-group">
              <Travalers />
            </div>
            <div className="input-group">
              <div className="location-field">
                <i className="fa-solid fa-clock" style={{ fontSize: "24px" }}></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Flight arrival time"
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
                  placeholder="Flight Arrival Date"
                ></Calendar>
              </div>
            </div>
          </div>
          <button className="search-button">Search</button>
        </div>
      )}

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
                  placeholder="Airport"
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
                  placeholder="Hotel"
                />
              </div>
            </div>
          </div>
          <div className="search-box" id="search-box">
            <div className="input-group">
              <Travalers />
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
                  placeholder="Flight Arrival Date"
                ></Calendar>
              </div>
            </div>
          </div>
          <div className="search-box" id="search-box">
            <div className="input-group">
              <div className="location-field">
                <i className="fa-solid fa-clock" style={{ fontSize: "24px" }}></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Flight arrival time"
                />
              </div>
            </div>

            <div className="input-group">
              <div className="location-field">
                <i className="fa-solid fa-clock" style={{ fontSize: "24px" }}></i>
                <input
                  type="text"
                  className="destination"
                  id="destination1"
                  name="destination"
                  placeholder="Flight departure time"
                />
              </div>
            </div>
          </div>
          <button className="search-button">Search</button>
        </div>
      )}
    </div>
  );
};

export default Transportation;
