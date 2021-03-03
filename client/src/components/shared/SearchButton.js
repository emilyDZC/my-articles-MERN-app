import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchButton = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} style={{ padding: "1px" }} />
    </div>
  );
};

export default SearchButton;
