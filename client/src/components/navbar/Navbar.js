import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <Link to="/posts" className="nav-link">
        My Articles
      </Link>
      <Link to="/music" className="nav-link">
        My Music
      </Link>
      <Link to="/garden" className="nav-link">
        My Garden
      </Link>
      <Link to="/birds" className="nav-link">
        My Birds
      </Link>
      <Link to="/teaching" className="nav-link">
        My Teaching
      </Link>
    </div>
  );
};

export default Navbar;
