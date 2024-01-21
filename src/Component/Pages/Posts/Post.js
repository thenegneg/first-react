import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <>
      <div className="col-3 bg-dark text-white p-3 m-3 rounded-4 shadow">
        <div className="col-12 py-3">
          <Link
            to={`/posts/${post.id}`}
            className="text-decoration-none"
            style={{ color: "lightgray" }}
          >
            {post.title.substr(0, 20) + " ..."}
          </Link>
        </div>
        <hr />
        <ul className="w-100 p-0">
          <li className="w-100  list-unstyled my-1">
            {" "}
            {post.body.substr(0, 70) + " ..."}{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Post;
