import React, { useEffect, useState } from "react";
import "./Travalers.scss";

const Travalers = () => {
  const [travelers, setTravelers] = useState("2 travelers, 1 room");
  const [rooms, setRooms] = useState([{ adults: 2, children: 0, childAges: [] }]);
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);

  useEffect(() => {
    const totalTravelers = rooms.reduce(
      (acc, room) => acc + room.adults + room.children,
      0
    );
    const totalRooms = rooms.length;
    setTravelers(
      `${totalTravelers} travelers, ${totalRooms} room${totalRooms > 1 ? "s" : ""}`
    );
  }, [rooms]);

  const handleTravelerChange = (index, type, action) => {
    const updatedRooms = [...rooms];
    if (action === "increment") {
      updatedRooms[index][type]++;
      if (type === "children") {
        updatedRooms[index].childAges.push(1); // Default age to 1 when adding a child
      }
    } else if (action === "decrement") {
      if (type === "adults" && updatedRooms[index][type] > 1) {
        updatedRooms[index][type]--;
      } else if (type === "children" && updatedRooms[index][type] > 0) {
        updatedRooms[index][type]--;
        updatedRooms[index].childAges.pop(); // Remove the last child's age
      }
    }
    setRooms(updatedRooms);
  };

  const handleChildAgeChange = (roomIndex, childIndex, age) => {
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex].childAges[childIndex] = age;
    setRooms(updatedRooms);
  };

  const addRoom = () => {
    setRooms([...rooms, { adults: 1, children: 0, childAges: [] }]);
  };

  const removeRoom = (index) => {
    const updatedRooms = rooms.filter((_, roomIndex) => roomIndex !== index);
    setRooms(updatedRooms);
  };
  return (
    <div className="input-group">
      <input
        className="travelers-dropdown"
        type="text"
        id="travelers"
        placeholder={travelers}
        readOnly
        onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
      />
      {showTravelersDropdown && (
        <div className="dropdown-content" id="dropdownContent">
          {rooms.map((room, index) => (
            <div className="room" key={index} id={`room${index + 1}`}>
              <h5>Room {index + 1}</h5>
              <div className="controls">
                <label>Adults</label>
                <button
                  className="minus"
                  onClick={() => handleTravelerChange(index, "adults", "decrement")}
                >
                  -
                </button>
                <span className="value">{room.adults}</span>
                <button
                  className="plus"
                  onClick={() => handleTravelerChange(index, "adults", "increment")}
                >
                  +
                </button>
              </div>
              <div className="controls">
                <label>Children</label>
                <button
                  className="minus"
                  onClick={() =>
                    handleTravelerChange(index, "children", "decrement")
                  }
                >
                  -
                </button>
                <span className="value">{room.children}</span>
                <button
                  className="plus"
                  onClick={() =>
                    handleTravelerChange(index, "children", "increment")
                  }
                >
                  +
                </button>
              </div>
              {room.children > 0 && (
                <div className="child-ages">
                  {room.childAges.map((age, childIndex) => (
                    <select
                      className="child-age"
                      key={childIndex}
                      value={age}
                      onChange={(e) =>
                        handleChildAgeChange(
                          index,
                          childIndex,
                          parseInt(e.target.value)
                        )
                      }
                    >
                      {Array.from({ length: 16 }, (_, i) => i + 1).map((age) => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))}
                    </select>
                  ))}
                </div>
              )}
              {rooms.length > 1 && (
                <button
                  className="remove-room rounded-1 text-danger bg-danger bg-opacity-10 "
                  onClick={() => removeRoom(index)}
                >
                  Remove Room
                </button>
              )}
            </div>
          ))}
          <button
            className="add-room text-primary bg-primary bg-opacity-10"
            onClick={addRoom}
          >
            Add another room
          </button>
          <button
            className="done text-success bg-success bg-opacity-10"
            onClick={() => setShowTravelersDropdown(false)}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Travalers;
