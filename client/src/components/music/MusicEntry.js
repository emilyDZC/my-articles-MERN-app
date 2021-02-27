import React from "react";
import moment from "moment";

const MusicEntry = ({ title, composer, createdAt, description }) => {
  return (
    <tr>
      <td>{moment(createdAt).format("Do MMM")}</td>
      <td>{composer}</td>
      <td>{title}</td>
      <td>{description}</td>
    </tr>
  );
};

export default MusicEntry;
