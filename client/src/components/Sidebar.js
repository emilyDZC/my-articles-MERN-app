import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const { topics } = useContext(GlobalContext);
  return (
    <div className="sidebar">
      <div className="menu">
        {topics &&
          topics.map((topic, i) => {
            return <MenuItem key={i} topic={topic} />;
          })}
      </div>
    </div>
  );
};

export default Sidebar;
