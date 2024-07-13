import React, { useState } from "react";
import { FaPlane, FaBed, FaCar, FaGift, FaTasks, FaShip } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";
import "./Maintab.scss"; // Include your custom CSS here
import Stays from "./stays";
import Flights from "./flights";
import Cars from "./cars";
import Cruises from "./cruises";
import ThingsToDo from "./thingsToDo";
import Packages from "./packages";

const MainTab = () => {
  const [activeTab, setActiveTab] = useState("Stays");

  const renderContent = () => {
    switch (activeTab) {
      case "Flights":
        return <Flights />;
      case "Stays":
        return <Stays />;
      case "Cars":
        return <Cars/>;
      case "Packages":
        return <Packages/>;
      case "Things to do":
        return <ThingsToDo/>;
      case "Cruises":
        return <Cruises/>;
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
