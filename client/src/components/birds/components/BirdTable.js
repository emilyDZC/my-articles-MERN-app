import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../shared/FormInput";

const BirdTable = ({ birds }) => {
  const [location, setLocation] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { addBirdSighting } = useContext(GlobalContext);

  const handleClick = (birdId) => {
    const newBirdSighting = {
      bird: birdId,
    };
    addBirdSighting(newBirdSighting);
  };

  return (
    <>
      {birds.map((bird, i) => {
        return (
          <div>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => handleClick(bird._id)}
            />
            {/* {showForm && (
              <>
                <FormInput
                  title="location"
                  placeholder="Where did you spot this bird?"
                  onChange={(location) => setLocation(location)}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={() => handleClick(bird._id)}
                />
              </>
            )} */}
            <a key={i} href={bird.song}>
              {bird.name} ({bird.birdSightings.length})
            </a>
          </div>
        );
      })}
    </>
  );
};

export default BirdTable;
