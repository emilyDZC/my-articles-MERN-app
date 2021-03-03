import React from "react";

const MenuItem = ({ topic, handleSearch }) => {
  return (
    <div className="menu-item" onClick={() => handleSearch(topic)}>
      {topic}
    </div>
  );
};

export default MenuItem;
