import React, { useState } from "react";
import {
  FaPlane,
  FaBed,
  FaCar,
  FaGift,
  FaTasks,
  FaShip,
  FaSyncAlt,
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalendarAlt,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Maintab.css"; // Include your custom CSS here

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("Flights");
  const [flightType, setFlightType] = useState("Roundtrip");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const renderFlightContent = () => {
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
        <div className="search-fields">
          <div className="field">
            <FaMapMarkerAlt />
            <input type="text" placeholder="Where to?" />
          </div>
          {flightType === "Roundtrip" && (
            <>
              <div className="field">
                <FaSyncAlt />
              </div>
              <div className="field">
                <FaMapMarkerAlt />
                <input type="text" placeholder="Where to?" />
              </div>
            </>
          )}
          <div className="field">
            <FaCalendarAlt />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
            {flightType === "Roundtrip" && (
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            )}
          </div>
          <div className="field">
            <FaUserFriends />
            <input type="text" placeholder="2 travelers, 1 room" />
          </div>
          <button className="search-button">Search</button>
          <div className="additional-options">
            <label>
              <input type="checkbox" /> Add a flight
            </label>
            <label>
              <input type="checkbox" /> Add a car
            </label>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Flights":
        return renderFlightContent();
      case "Stays":
        return <div className="tab-content">Stays content goes here</div>;
      case "Cars":
        return <div className="tab-content">Cars content goes here</div>;
      case "Packages":
        return <div className="tab-content">Packages content goes here</div>;
      case "Things to do":
        return <div className="tab-content">Things to do content goes here</div>;
      case "Cruises":
        return <div className="tab-content">Cruises content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs main_tab">
        <button
          onClick={() => setActiveTab("Stays")}
          className={activeTab === "Stays" ? "active" : ""}
        >
          <FaBed /> Stays
        </button>
        <button
          onClick={() => setActiveTab("Flights")}
          className={activeTab === "Flights" ? "active" : ""}
        >
          <FaPlane /> Flights
        </button>
        <button
          onClick={() => setActiveTab("Cars")}
          className={activeTab === "Cars" ? "active" : ""}
        >
          <FaCar /> Cars
        </button>
        <button
          onClick={() => setActiveTab("Packages")}
          className={activeTab === "Packages" ? "active" : ""}
        >
          <FaGift /> Packages
        </button>
        <button
          onClick={() => setActiveTab("Things to do")}
          className={activeTab === "Things to do" ? "active" : ""}
        >
          <FaTasks /> Things to do
        </button>
        <button
          onClick={() => setActiveTab("Cruises")}
          className={activeTab === "Cruises" ? "active" : ""}
        >
          <FaShip /> Cruises
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default MainTab;
