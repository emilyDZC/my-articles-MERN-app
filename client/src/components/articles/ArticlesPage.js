import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import ResetButton from "./components/ResetButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const AddButton = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faPencilAlt} /> Add New Post
    </div>
  );
};

const ArticlesPage = () => {
  const [showAddPost, setShowAddPost] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="page-container">
      <Sidebar handleSearch={(val) => handleSearch(val)} />
      <div className="container">
        <Header />
        <Searchbar handleSearch={(val) => handleSearch(val)} />
        <button onClick={() => setShowAddPost((current) => !current)}>
          {showAddPost ? "Hide" : <AddButton />}
        </button>
        {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
        <Posts searchText={searchText} handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default ArticlesPage;
