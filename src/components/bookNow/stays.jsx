import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

const Stays = () => {
  const [showFlight, setShowFlight] = useState(false);
  const [location, setLocation] = useState("");
  const [flightLocation, setFlightLocation] = useState("");

  const locations = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Miami",
    "San Francisco",
    "Boston",
    "Seattle",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Diego",
    "Denver",
    "Atlanta",
    "Washington, D.C.",
  ];

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleFlightLocationChange = (e) => setFlightLocation(e.target.value);
  const toggleInputField = () => setShowFlight(!showFlight);
  return (
    <div className="tab-content">
      <div className="tab__content-item">
        <div className="search-box" id="search-box">
          <div className="input-group">
            <label htmlFor="destination">Where to?</label>
            <div className="location-field">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: "24px" }} />
              <input
                type="text"
                className="destination"
                id="destination1"
                placeholder="Where to?"
                value={location}
                onChange={handleLocationChange}
              />
              {location && (
                <div className="dropdown" id="locationDropdown1">
                  {locations
                    .filter((loc) =>
                      loc.toLowerCase().includes(location.toLowerCase())
                    )
                    .map((loc, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => setLocation(loc)}
                      >
                        {loc}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="dates">Dates</label>
            <div className="location-field">
              <FontAwesomeIcon icon={faCalendar} style={{ fontSize: "22px" }} />
              <input type="text" name="daterange" placeholder="Jul 10 - Jul 16" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="travelers">Travelers</label>
            <input type="text" id="travelers" placeholder="2 travelers, 1 room" />
          </div>
          <button className="search-button">Search</button>
        </div>
        <div className="options">
          <label>
            <input type="checkbox" id="toggleCheckbox" onChange={toggleInputField} />
            Add Flight
          </label>
        </div>
        {showFlight && (
          <div className="input-group" id="add-flight">
            <div className="location-field">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: "23px" }} />
              <input
                type="text"
                className="destination"
                id="destination6"
                placeholder="Where to?"
                value={flightLocation}
                onChange={handleFlightLocationChange}
              />
              {flightLocation && (
                <div className="dropdown" id="locationDropdown6">
                  {locations
                    .filter((loc) =>
                      loc.toLowerCase().includes(flightLocation.toLowerCase())
                    )
                    .map((loc, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => setFlightLocation(loc)}
                      >
                        {loc}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stays;
