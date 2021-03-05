import React from "react";
import PlantTable from "./components/PlantTable";
import Flowers from "./components/Flowers";

const GardenPage = () => {
  return (
    <div className="music-page-container">
      <h2>My Garden</h2>
      <div className="widgets-container">
        <PlantTable />
        <Flowers />
      </div>
    </div>
  );
};

export default GardenPage;
