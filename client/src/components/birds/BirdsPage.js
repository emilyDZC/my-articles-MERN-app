import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const BirdsPage = () => {
  const { birds, getBirds } = useContext(GlobalContext);

  useEffect(() => {
    getBirds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h2>Birds</h2>
      {birds.map((bird, i) => {
        return (
          <p key={i}>
            {bird.name} ({bird.birdSightings.length})
          </p>
        );
      })}
    </div>
  );
};

export default BirdsPage;
