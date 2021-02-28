import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const AddMusicEntry = ({ setShowAddEntry }) => {
  const { addMusicEntry } = useContext(GlobalContext);

  const [title, setTitle] = useState();
  const [composer, setComposer] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const newMusicEntry = {
      title,
      composer,
      description,
      tags,
    };

    addMusicEntry(newMusicEntry);
    setShowAddEntry(false);
  };

  return (
    <div>
      <h3>Add new music entry</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="textarea">Composer</label>
          <textarea
            rows={10}
            placeholder="Enter composer..."
            onChange={(e) => setComposer(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Notes</label>
          <input
            type="text"
            placeholder="Enter notes..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Tags</label>
          <input
            type="text"
            placeholder="Enter tags, separated by a comma"
            onChange={(e) =>
              setTags(
                e.target.value.split(",").map((str) => str.trim().toLowerCase())
              )
            }
          />
        </div>
        <button className="btn">Add music entry</button>
      </form>
    </div>
  );
};

export default AddMusicEntry;
