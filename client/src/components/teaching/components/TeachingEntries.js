import React, { useContext, useEffect } from "react";
import TeachingEntry from "./TeachingEntry";
import moment from "moment";
import { GlobalContext } from "../../../context/GlobalState";
import ResetButton from "../../articles/components/ResetButton";

const TeachingEntries = ({ searchText, handleSearch }) => {
  const { teachingEntries, getTeachingEntries } = useContext(GlobalContext);

  useEffect(() => {
    getTeachingEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   const filtered = teachingEntries.filter((entry) =>
  //     entry.tags.includes(searchText.toLowerCase())
  //   );

  return (
    <>
      {teachingEntries.map((post, i) => {
        return (
          <TeachingEntry
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
    /* {filtered.length > 0 && (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <p>Showing results for #{searchText.toLowerCase()}</p>
          <ResetButton handleSearch={handleSearch} />
        </div>
      )}
      {filtered.length > 0 &&
        filtered.map((post, i) => {
          return (
            <>
              <TeachingEntry
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
        })} */
    /* 
      {filtered.length < 1 && <p>Showing all results</p>}
      {filtered.length < 1 &&
        teachingEntries.map((post, i) => {
          return (
            <TeachingEntry
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
        })} */
  );
};

export default TeachingEntries;
