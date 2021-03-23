import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import BirdTable from "./components/BirdTable";

const BirdsPage = () => {
  const { birds, getBirds } = useContext(GlobalContext);

  useEffect(() => {
    getBirds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="birds-page">
      <h2>Birds</h2>
      <div className="birds-container">
        <BirdTable birds={birds} />
      </div>
    </div>
  );
};

export default BirdsPage;
