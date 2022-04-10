import React, { useState } from "react";
import "./BlogsList.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const BlogList = ({ data }) => {
  console.log(data);

  const history = useHistory();

  const handleDelete = (id) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.go(0);
      console.log("deleted");
    });
  };

  return (
    <div className="blog-List">
      {data.map((blogs) => {
        console.log(blogs);
        return (
          <div className="blog-preview" key={blogs.id}>
            <h2>
              <Link to={`/BlogsData/${blogs.id}`}>{blogs.title}</Link>
            </h2>
            <p>Written by {blogs.author}</p>
            <button onClick={() => handleDelete(blogs.id)}>Delete blogs</button>
          </div>
        );
      })}
    </div>
  );
};
export default BlogList;
