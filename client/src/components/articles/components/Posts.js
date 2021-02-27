import React, { useContext, useEffect } from "react";
import Post from "./Post";
import moment from "moment";
import { GlobalContext } from "../../../context/GlobalState";
import ResetButton from "./ResetButton";

const Posts = ({ searchText, handleSearch }) => {
  const { posts, getPosts } = useContext(GlobalContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = posts.filter((post) =>
    post.tags.includes(searchText.toLowerCase())
  );

  return (
    <>
      {filtered.length > 0 && (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <p>Showing results for #{searchText.toLowerCase()}</p>
          <ResetButton handleSearch={handleSearch} />
        </div>
      )}
      {filtered.length > 0 &&
        filtered.map((post, i) => {
          return (
            <>
              <Post
                title={post.title}
                body={post.body}
                date={moment(post.createdAt).format("Do MMMM YYYY, h:mm a")}
                tags={post.tags}
                topic={post.topic}
                id={post._id}
                source={post.source}
                key={i}
              />
            </>
          );
        })}

      {filtered.length < 1 && <p>Showing all results</p>}
      {filtered.length < 1 &&
        posts.map((post, i) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              date={moment(post.createdAt).format("Do MMMM YYYY, h:mm a")}
              tags={post.tags}
              topic={post.topic}
              id={post._id}
              source={post.source}
              key={i}
            />
          );
        })}
    </>
  );
};

export default Posts;
