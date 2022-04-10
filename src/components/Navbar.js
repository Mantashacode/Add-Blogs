import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="heading">
      <h1>My Blogs...</h1>
      <p id="p1">
        <Link to="/">Home</Link>
      </p>
      <p id="p2">
        <Link to="/Create">New Blog</Link>
      </p>
    </div>
  );
};

export default Navbar;
