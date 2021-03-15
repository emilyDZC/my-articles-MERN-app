import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Articles from "./components/articles/ArticlesPage";
import Music from "./components/music/MusicPage";
import Garden from "./components/garden/GardenPage";
import Birds from "./components/birds/BirdsPage";
import Navbar from "./components/navbar/Navbar";
import { GlobalProvider } from "./context/GlobalState";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/music">
            <Music />
          </Route>
          <Route exact path="/posts">
            <Articles />
          </Route>
          <Route exact path="/garden">
            <Garden />
          </Route>
          <Route exact path="/birds">
            <Birds />
          </Route>
          <Route exact path="/">
            <Articles />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default withAuthenticator(App);
