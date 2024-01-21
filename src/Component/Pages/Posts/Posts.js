import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchPosts = async () => {
    try {
      let res = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {loading && (
        <div className=" col-6 offset-3 text-center p-2 ">
          <span className="spinner-border text-dark"></span>
        </div>
      )}
      {posts && (
        <>
          <div className="d-block mt-5 mb-4">
            <Link
              to="/posts/create"
              className="btn btn-dark px-4 py-1 mx-auto d-block "
              style={{ width: "100px" }}
            >
              create
            </Link>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {posts.map((elem) => {
              return <Post post={elem} key={elem.id} />;
            })}
          </div>
        </>
      )}
      ;
    </>
  );
};

export default Posts;
