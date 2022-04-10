import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry Bro</h2>
      <p>This page can not be found just like your girlfriend</p>
      <Link to="/">Go Back to Homepage...</Link>
    </div>
  );
};

export default NotFound;
