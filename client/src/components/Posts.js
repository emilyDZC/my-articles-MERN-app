import React, { useContext, useEffect } from "react";
import Post from "./Post";
import moment from "moment";
import { GlobalContext } from "../context/GlobalState";

const Posts = ({ searchText }) => {
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
        <p>Showing results for #{searchText.toLowerCase()}</p>
      )}
      {filtered.length > 0 &&
        filtered.map((post) => {
          return (
            <>
              <Post
                title={post.title}
                body={post.body}
                date={moment(post.createdAt).format("Do MMMM YYYY, h:mm a")}
                tags={post.tags}
                topic={post.topic}
                key={post._id}
                id={post._id}
                source={post.source}
              />
            </>
          );
        })}

      {filtered.length < 1 && <p>Showing all results</p>}
      {filtered.length < 1 &&
        posts.map((post) => {
          return (
            <Post
              title={post.title}
              body={post.body}
              date={moment(post.createdAt).format("Do MMMM YYYY, h:mm a")}
              tags={post.tags}
              topic={post.topic}
              key={post._id}
              id={post._id}
              source={post.source}
            />
          );
        })}
    </>
  );
};

export default Posts;
