import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import moment from "moment";

const MusicPage = () => {
  const { musicEntries, getMusicEntries } = useContext(GlobalContext);

  useEffect(() => {
    getMusicEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {musicEntries.map((entry, i) => {
        return (
          <>
            <p key={i}>
              {moment(entry.createdAt).format("Do MMM 'YY")}: {entry.composer} -{" "}
              {entry.title}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default MusicPage;
