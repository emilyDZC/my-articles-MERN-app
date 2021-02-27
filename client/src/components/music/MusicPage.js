import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MusicEntry from "./MusicEntry";

const MusicPage = () => {
  const { musicEntries, getMusicEntries } = useContext(GlobalContext);

  useEffect(() => {
    getMusicEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="music-page-container">
      <h3>Music Log</h3>
      <div className="music-entry-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Composer</th>
              <th>Piece</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {musicEntries.map((entry, i) => {
              return (
                <MusicEntry
                  key={i}
                  title={entry.title}
                  composer={entry.composer}
                  createdAt={entry.createdAt}
                  description={entry.description}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MusicPage;
