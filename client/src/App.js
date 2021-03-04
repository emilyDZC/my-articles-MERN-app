import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Articles from "./components/articles/ArticlesPage";
import Music from "./components/music/MusicPage";
import Garden from "./components/garden/GardenPage";
import Navbar from "./components/navbar/Navbar";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/api/music">
            <Music />
          </Route>
          <Route exact path="/api/posts">
            <Articles />
          </Route>
          <Route exact path="/api/garden">
            <Garden />
          </Route>
          <Route exact path="/">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
