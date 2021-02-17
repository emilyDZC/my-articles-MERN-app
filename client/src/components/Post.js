import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditPost from "./EditPost";

const Post = ({ id, title, body, tags, date, topic, source }) => {
  const { deletePost } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);

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

  const editPost = () => {
    setEdit(true);
  };

  return (
    <>
      {edit && (
        <EditPost
          id={id}
          title={title}
          body={body}
          source={source}
          tags={tags}
          topic={topic}
          date={date}
          setEdit={setEdit}
        />
      )}
      {!edit && (
        <div className="post-container">
          <h3>{title}</h3>
          <p className="post-date">{date}</p>
          <p className="post-body">{body}</p>
          <p className="post-source">Source: {source}</p>
          <button onClick={() => confirmDelete(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button onClick={() => editPost()}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
        </div>
      )}
    </>
  );
};

export default Post;
