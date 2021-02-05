import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { GlobalProvider } from "./context/GlobalState";

const AddButton = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faPencilAlt} /> Add New Post
    </div>
  );
};

function App() {
  const [showAddPost, setShowAddPost] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <GlobalProvider>
      <div className="page-container">
        <Sidebar />
        <div className="container">
          <Header />
          <Searchbar handleSearch={(val) => handleSearch(val)} />
          <button onClick={() => setShowAddPost((current) => !current)}>
            {showAddPost ? "Hide" : <AddButton />}
          </button>
          {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
          <Posts searchText={searchText} />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
