import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditPlant from "./EditPlant";

const PlantEntry = ({ plant }) => {
  const { deletePlant } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm delete",
      message: "Are you sure you want to delete this plant?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletePlant(id),
        },
        {
          label: "No",
          onClick: () => console.log("Cancel delete"),
        },
      ],
    });
  };

  const editPlant = () => {
    setEdit(true);
  };

  return (
    <>
      {edit && <EditPlant plant={plant} setEdit={setEdit} />}
      {!edit && (
        <tr>
          <td>{plant.name}</td>
          <td>{plant.sowMonth}</td>
          <td>{plant.plantMonth}</td>
          <td>{plant.flowerMonth}</td>
          <td>{plant.notes}</td>
          {/* <td>{plant.link}</td> */}
          <button onClick={() => confirmDelete(plant.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button onClick={() => editPlant()}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </tr>
      )}
    </>
  );
};

export default PlantEntry;
