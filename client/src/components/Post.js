import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Post = ({ id, title, body, tags, date, topic, source }) => {
  const { deletePost } = useContext(GlobalContext);
  return (
    <div className="post-container">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{body}</p>
      <p>Source: {source}</p>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  );
};

export default Post;
