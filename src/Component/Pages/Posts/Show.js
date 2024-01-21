import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Show = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchPosts = async () => {
    try {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };
  const comBackpost = () => {
    navigate("/posts ");
  };
  const deletePost = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mx-2 rounded-5 shadow px-3 py-1",
        cancelButton: "btn btn-danger mx-2 rounded-5 shadow px-3 py-1",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const res = axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${id}`,
            { method: "delete" }
          );
          navigate("/posts");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  const editPost=async()=>{
    navigate(`/posts/edit/${id}`)
  }
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
      {post && (
        <div className="col-3 bg-dark text-white p-3 m-3 rounded-4 shadow">
          <div className="col-12 py-3">{post.title}</div>
          <hr />
          <ul className="w-100 p-0">
            <li className="w-100  list-unstyled my-1"> {post.body} </li>
            <li className="w-100 ps-2 list-unstyled my-1 d-flex justify-content-center gap-4">
              <button
                style={{
                  boxShadow: "5px 5px 5px #5b5b5b",
                  fontWeight: "600",
                  border: "none",
                }}
                className="btn text-decoration-none btn-light text-dark py-1  text-center mt-4 rounded-5 px-3 py-1"
                onClick={comBackpost}
              >
                come back
              </button>
              <button
                style={{
                  boxShadow: "5px 5px 5px #4b4b4b",
                  fontWeight: "600",
                  border: "none",
                }}
                onClick={deletePost}
                className="text-decoration-none btn btn-danger py-1 text-center mt-4 rounded-5 px-3 py-1"
              >
                delete
              </button>
              <button
                style={{
                  boxShadow: "5px 5px 5px #4b4b4b",
                  fontWeight: "600",
                  border: "none",
                }}
                onClick={editPost}
                className="text-decoration-none btn btn-warning  py-1 text-center mt-4 rounded-5 px-3 py-1"
              >
                edit
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Show;
