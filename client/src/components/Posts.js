import React, { useContext } from "react";
import Post from "./Post";
import moment from "moment";
import { GlobalContext } from "../context/GlobalState";

const Posts = () => {
  const { posts } = useContext(GlobalContext);
  return (
    <>
      {posts.reverse().map((post) => {
        return (
          <Post
            title={post.title}
            body={post.body}
            date={moment(post.date).format("Do MMMM YYYY, h:mm a")}
            tags={post.tags}
            topic={post.topic}
            key={post.id}
            id={post.id}
            source={post.source}
          />
        );
      })}
    </>
  );
};

export default Posts;
