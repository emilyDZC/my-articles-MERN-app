import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import PlantEntry from "./PlantEntry";

const PlantTable = () => {
  const { plants, getPlants } = useContext(GlobalContext);

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="todo-container">
      <h3>Flowers and Plants</h3>
      <table>
        <thead>
          <th>Plant</th>
          <th>Sow</th>
          <th>Plant out</th>
          <th>Flower</th>
          <th>Notes</th>
          {/* <th>Link</th> */}
        </thead>
        <tbody>
          {plants.map((plant, i) => {
            return <PlantEntry plant={plant} key={i} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlantTable;
