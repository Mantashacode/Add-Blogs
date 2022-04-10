import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mario");
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();

    const blogs = { title, body, author };
    console.log(blogs);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogs),
    }).then(() => {
      history.push("/");
      console.log("new blog added");
    });
  };
  return (
    <div className="create">
      <h1>Write Blogs Here..</h1>
      <form onSubmit={handlesubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          className="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          rows="10"
          cols="30"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <button>Add Blogs</button>
      </form>
    </div>
  );
};

export default Create;
