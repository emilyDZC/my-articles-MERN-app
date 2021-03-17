import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  posts: [],
  error: null,
  loading: true,
  topics: [],
  searchText: "",
  musicEntries: [],
  plants: [],
  birds: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions: posts
  async function getPosts() {
    try {
      const res = await axios.get("/api/posts");

      dispatch({
        type: "GET_POSTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deletePost(id) {
    try {
      await axios.delete(`/api/posts/${id}`);

      dispatch({
        type: "DELETE_POST",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addPost(post) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/posts", post, config);

      dispatch({
        type: "ADD_POST",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function updatePost(post) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(`/api/posts/${post.id}`, post, config);

      dispatch({
        type: "UPDATE_POST",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function getTopics() {
    try {
      const res = await axios.get("/api/posts");

      dispatch({
        type: "GET_TOPICS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TOPIC_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Actions: musicEntries
  async function getMusicEntries() {
    try {
      const res = await axios.get("/api/music");

      dispatch({
        type: "GET_MUSIC",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "MUSIC_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addMusicEntry(entry) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/music", entry, config);

      dispatch({
        type: "ADD_MUSIC_ENTRY",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "MUSIC_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function updateMusicEntry(musicEntry) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(
        `/api/music/${musicEntry.id}`,
        musicEntry,
        config
      );

      dispatch({
        type: "UPDATE_MUSIC_ENTRY",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "MUSIC_ENTRY_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteMusicEntry(id) {
    try {
      await axios.delete(`/api/music/${id}`);

      dispatch({
        type: "DELETE_MUSIC_ENTRY",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Actions: plants
  async function getPlants() {
    try {
      const res = await axios.get("/api/plants");

      dispatch({
        type: "GET_PLANTS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "PLANTS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addPlant(plant) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/plants", plant, config);

      dispatch({
        type: "ADD_PLANT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "PLANT_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function updatePlant(plant) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.patch(`/api/plants/${plant.id}`, plant, config);

      dispatch({
        type: "UPDATE_PLANT",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "PLANT_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deletePlant(id) {
    try {
      await axios.delete(`/api/plants/${id}`);

      dispatch({
        type: "DELETE_PLANT",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "POST_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  // Actions: birds
  async function getBirds() {
    try {
      const res = await axios.get("/api/birds");

      dispatch({
        type: "GET_BIRDS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "BIRDS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addBird(bird) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/birds", bird, config);

      dispatch({
        type: "ADD_BIRD",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "BIRD_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        loading: state.loading,
        topics: state.topics,
        musicEntries: state.musicEntries,
        plants: state.plants,
        birds: state.birds,
        deletePost,
        addPost,
        getPosts,
        updatePost,
        getTopics,
        getMusicEntries,
        addMusicEntry,
        updateMusicEntry,
        deleteMusicEntry,
        getPlants,
        addPlant,
        updatePlant,
        deletePlant,
        getBirds,
        addBird,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
