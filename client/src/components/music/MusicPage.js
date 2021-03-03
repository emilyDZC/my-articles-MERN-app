import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MusicEntry from "./components/MusicEntry";
import AddMusicEntry from "./components/AddMusicEntry";
import AddButton from "../shared/AddButton";

const MusicPage = () => {
  const { musicEntries, getMusicEntries } = useContext(GlobalContext);
  const [showAddEntry, setShowAddEntry] = useState(false);

  useEffect(() => {
    getMusicEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="music-page-container">
      <h2>Music Log</h2>
      <button onClick={() => setShowAddEntry((current) => !current)}>
        {showAddEntry ? "Hide" : <AddButton text="Music Entry" />}
      </button>
      {showAddEntry && <AddMusicEntry setShowAddEntry={setShowAddEntry} />}

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
