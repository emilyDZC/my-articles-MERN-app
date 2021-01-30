import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

import { GlobalContext, GlobalProvider } from "./context/GlobalState";

function App() {
  const [showAddPost, setShowAddPost] = useState(false);

  return (
    <GlobalProvider>
      <Header />
      <button onClick={() => setShowAddPost((current) => !current)}>
        {showAddPost ? "Hide" : "Add New Post"}
      </button>
      {showAddPost && <AddPost setShowAddPost={setShowAddPost} />}
      <div className="container">
        <Posts />
      </div>
    </GlobalProvider>
  );
}

export default App;
