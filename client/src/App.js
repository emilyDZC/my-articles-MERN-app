import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
      <Router>
        <div className="page-container">
          <Sidebar handleSearch={(val) => handleSearch(val)} />
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
      </Router>
    </GlobalProvider>
  );
}

export default App;
