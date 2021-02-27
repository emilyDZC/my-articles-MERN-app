import React, { useState } from "react";

const Searchbar = ({ handleSearch }) => {
  const [val, setVal] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(val);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setVal(e.target.value)}
          type="text"
          placeholder="Search by tag..."
        />
        <button className="btn">Filter posts</button>
      </form>
    </>
  );
};

export default Searchbar;
