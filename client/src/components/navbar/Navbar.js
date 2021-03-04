import React from "react";
import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/api/posts" className="nav-link">
        My Articles
      </Link>
      <Link to="/api/music" className="nav-link">
        My Music
      </Link>
      <Link to="/api/garden" className="nav-link">
        My Garden
      </Link>
    </div>
  );
};

export default Navbar;
