import React from "react";
import moment from "moment";

const MusicEntry = ({
  title,
  composer,
  createdAt,
  description,
  instrumentation,
}) => {
  return (
    <tr>
      <td>{moment(createdAt).format("Do MMM")}</td>
      <td>{composer}</td>
      <td>{title}</td>
      <td>{instrumentation}</td>
      <td>{description}</td>
    </tr>
  );
};

export default MusicEntry;
