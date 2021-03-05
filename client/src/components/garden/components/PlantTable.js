import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

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
        </thead>
        <tbody>
          {plants.map((plant, i) => {
            return (
              <tr>
                <td>{plant.name}</td>
                <td>{plant.sowMonth}</td>
                <td>{plant.plantMonth}</td>
                <td>{plant.flowerMonth}</td>
                <td>{plant.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlantTable;
