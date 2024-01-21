import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Show = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const res = await data.json();
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };
  const comBackusers = () => {
    navigate("/users ");
  };
  const deleteUser = async () => {
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
          navigate("/users");
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
  useEffect(() => {
    fetchUser();
  });
  return (
    <>
      {loading && (
        <div className=" col-6 offset-3 text-center p-2 ">
          <span className="spinner-border text-dark"></span>
        </div>
      )}
      {user && (
        <div className="col-3 bg-dark p-3 m-3 rounded-4 shadow text-white">
          <div className="col-12">{user.name}</div>
          <ul className="w-100 p-0">
            <li className="w-100 ps-2 list-unstyled my-1"> {user.username} </li>
            <li className="w-100 ps-2 list-unstyled my-1"> {user.email} </li>
            <li className="w-100 ps-2 list-unstyled my-1"> {user.phone} </li>
            <li className="w-100 ps-2 list-unstyled my-1"> {user.website} </li>
            <li className="w-100 ps-2 list-unstyled my-1 d-flex justify-content-center gap-4">
              <button
                style={{
                  boxShadow: "5px 5px 5px #5b5b5b",
                  fontWeight: "600",
                  border: "none",
                }}
                className="btn text-decoration-none btn-light text-dark py-1  text-center mt-4 rounded-5 px-3 py-1"
                onClick={comBackusers}
              >
                come back
              </button>
              <button
                style={{
                  boxShadow: "5px 5px 5px #4b4b4b",
                  fontWeight: "600",
                  border: "none",
                }}
                onClick={deleteUser}
                className="text-decoration-none btn btn-danger  text-light py-1 text-center mt-4 rounded-5 px-3 py-1"
              >
                delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Show;
