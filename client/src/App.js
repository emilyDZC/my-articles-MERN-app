import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import { GlobalContext, GlobalProvider } from "./context/GlobalState";

const AddButton = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faPencilAlt} /> Add New Post
    </div>
  );
};

function App() {
  const [showAddPost, setShowAddPost] = useState(false);

  return (
    <GlobalProvider>
      <div className="page-container">
        <div className="sidebar"></div>
        <div className="container">
          <Header />
          <button onClick={() => setShowAddPost((current) => !current)}>
            {showAddPost ? "Hide" : <AddButton />}
          </button>
          {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
          <Posts />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
