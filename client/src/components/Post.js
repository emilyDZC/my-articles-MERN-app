import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Post = ({ id, title, body, tags, date, topic, source }) => {
  const { deletePost } = useContext(GlobalContext);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Confirm delete",
      message: "Are you sure you want to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletePost(id),
        },
        {
          label: "No",
          onClick: () => console.log("Cancel delete"),
        },
      ],
    });
  };

  return (
    <div className="post-container">
      <h3>{title}</h3>
      <p className="post-date">{date}</p>
      <p>{body}</p>
      <p>Source: {source}</p>
      <button onClick={() => confirmDelete(id)}>Delete</button>
    </div>
  );
};

export default Post;