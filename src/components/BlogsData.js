import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./BlogsData.css";

const BlogsData = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  return (
    <div className="BlogsData">
      {console.log(data)}
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written By - {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
};
export default BlogsData;
