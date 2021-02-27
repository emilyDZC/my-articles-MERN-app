import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const EditPost = (props) => {
  const { updatePost } = useContext(GlobalContext);
  const { setEdit } = props;

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [topic, setTopic] = useState(props.topic);
  const [tags, setTags] = useState(props.tags);
  const [source, setSource] = useState(props.source);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      id: props.id,
      title,
      body,
      topic,
      tags,
      source,
    };

    updatePost(updatedPost);
    setEdit(false);
  };

  return (
    <div>
      <h3>Edit post</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="textarea">Text</label>
          <textarea
            rows={10}
            placeholder="Enter text..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Topic</label>
          <input
            type="text"
            placeholder="Enter topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Source</label>
          <input
            type="text"
            placeholder="Enter source..."
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Tags</label>
          <input
            type="text"
            placeholder="Enter tags, separated by a comma"
            value={tags}
            onChange={(e) =>
              setTags(
                e.target.value.split(",").map((str) => str.trim().toLowerCase())
              )
            }
          />
        </div>
        <button className="btn">Update post</button>
      </form>
    </div>
  );
};

export default EditPost;
