import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
              <Link
                to={`/${topic}`}
                key={i}
                onClick={() => handleSearch(topic)}
              >
                <MenuItem topic={topic} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
