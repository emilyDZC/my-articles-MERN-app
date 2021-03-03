import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import MenuItem from "./MenuItem";

const Sidebar = ({ handleSearch }) => {
  const { topics, getTopics } = useContext(GlobalContext);

  useEffect(() => {
    getTopics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sidebar">
      <div className="menu">
        {topics &&
          topics.map((topic, i) => {
            return (
              <MenuItem
                key={i}
                topic={topic}
                handleSearch={(val) => handleSearch(val)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
