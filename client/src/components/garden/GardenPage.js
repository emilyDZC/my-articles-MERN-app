import React, { useState } from "react";

import PlantTable from "./components/PlantTable";
import AddButton from "../shared/AddButton";
import AddPlant from "./components/AddPlant";

const GardenPage = () => {
  const [showAddEntry, setShowAddEntry] = useState(false);

  return (
    <div className="music-page-container">
      <h2>My Garden</h2>
      <button onClick={() => setShowAddEntry((current) => !current)}>
        {showAddEntry ? "Hide" : <AddButton text="Plant" />}
      </button>
      {showAddEntry && <AddPlant setShowAddEntry={setShowAddEntry} />}
      <div className="widgets-container">
        <PlantTable />
      </div>
    </div>
  );
};

export default GardenPage;
