import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AddButton from "../shared/AddButton";
import SearchButton from "../shared/SearchButton";
import AddTeachingPost from "./components/AddTeachingPost";
import TeachingEntries from "./components/TeachingEntries";

const TeachingPage = () => {
  const [showAddPost, setShowAddPost] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { teachingEntries, getTeachingEntries } = useContext(GlobalContext);

  useEffect(() => {
    getTeachingEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="page-container">
      <div className="container">
        {/* {teachingEntries.map((entry) => {
          return (
            <div>
              <h3>{entry.title}</h3>
              <p>{entry.body}</p>
            </div>
          );
        })} */}
        {/* <button onClick={() => setShowSearch((current) => !current)}>
          {showSearch ? "Hide" : <SearchButton />}
        </button> */}
        {/* {showSearch && <Searchbar handleSearch={(val) => handleSearch(val)} />} */}
        <button onClick={() => setShowAddPost((current) => !current)}>
          {showAddPost ? "Hide" : <AddButton text="Post" />}
        </button>
        {showAddPost && <AddTeachingPost setShowAddTeaching={setShowAddPost} />}
        <TeachingEntries />
      </div>
    </div>
  );
};

export default TeachingPage;
