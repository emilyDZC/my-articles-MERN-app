import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Denisovans",
      body:
        "Interesting article about how, when and where the Denisovans may have overlapped and interbred with homo sapiens",
      date: new Date(),
      topic: "Evolution",
      tags: ["evolution", "homo sapiens", "prehistory"],
      source: "New Scientist",
    },
    {
      id: 2,
      title: "Novacene",
      body:
        "Next chapter of book, about climate change and whether we actually want the earth to cool",
      date: new Date(),
      topic: "Philosophy",
      tags: ["philosophy", "environment", "climate", "evolution"],
      source: "Novacene, by James Lovelock",
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deletePost(id) {
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  }

  function addPost(post) {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  }

  return (
    <GlobalContext.Provider value={{ posts: state.posts, deletePost, addPost }}>
      {children}
    </GlobalContext.Provider>
  );
};
