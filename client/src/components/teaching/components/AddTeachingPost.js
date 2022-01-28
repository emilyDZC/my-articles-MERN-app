import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const AddTeaching = ({ setShowAddTeaching }) => {
  const { addTeachingEntry } = useContext(GlobalContext);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [topic, setTopic] = useState();
  const [tags, setTags] = useState();
  const [source, setSource] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTeaching = {
      title,
      body,
      topic,
      tags,
      source,
    };

    addTeachingEntry(newTeaching);
    setShowAddTeaching(false);
  };

  return (
    <div>
      <h3>Add new teaching entry</h3>
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
          <label htmlFor="textarea">Text</label>
          <textarea
            rows={10}
            placeholder="Enter text..."
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Topic</label>
          <input
            type="text"
            placeholder="Enter topic..."
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Source</label>
          <input
            type="text"
            placeholder="Enter source..."
            onChange={(e) => setSource(e.target.value)}
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
        <button className="btn">Add teaching entry</button>
      </form>
    </div>
  );
};

export default AddTeaching;
