// import React, { useState } from "react";
import useFetch from "./useFetch";
import BlogsList from "./BlogsList";
import "./Home.css";
// import { Lines } from "react-preloaders";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  // const [newdata, setBlogs] = useState([]);

  // const handleDelete = (id) => {
  //   const newBlogs = data.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    console.log(data, isPending, error),
    (
      <div className="home">
        <h2 id="h2">All Blogs</h2>
        {isPending && <h2>{isPending}</h2>}
        {error && <h2>{error}</h2>}
        {data && <BlogsList data={data} />}
      </div>
    )
  );
};

export default Home;
