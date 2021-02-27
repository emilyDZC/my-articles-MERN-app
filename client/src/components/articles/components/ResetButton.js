import React from "react";

const ResetButton = ({ handleSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch("");
  };

  return (
    <>
      <button onClick={onSubmit} className="btn reset">
        Reset
      </button>
    </>
  );
};

export default ResetButton;
