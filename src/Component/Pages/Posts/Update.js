import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = ({post}) => { 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const eventHandler = (e) => {
    e.preventDefault();
    const update=async()=>{
        try {
            const res=await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,{
                title:title,
                body:body
            },{
                method:"put",
                headers:{
                    "Content-Type":"application/json;charset=utf-8"
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    update()
    Swal.fire({
        title:"Good job!",
        text:"you clicked the button!",
        icon:"seccess"
    })
    navigate("/posts/")
  };
  useEffect(()=>{
      setTitle(post.title)
      setBody(post.body)
  },[])
  return (
    <>
      <div className="col-6 offset-3 bg-dark rounded-4 p-5">
        <form action="#" method="post" onSubmit={(e) => eventHandler(e)}>
          <div className="d-block mb-2">
            <label htmlFor="title" className="text-white p-3 ">
              title
            </label>
            <input
              type="text"
              id="title"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              style={{ boxShadow: "5px 5px 5px gray", fontWeight: "600" }}
              value={title}
            />
            {title.length === 0 ? (
              <p
                className="text-danger mt-3"
                style={{ fontWeight: "600", textShadow: "5px 5px 5px #5b5b5b" }}
              >
                this field required ... !
              </p>
            ) : (
              ""
            )}
            {title.length >= 1 && title.length < 5 ? (
              <p
                className="text-danger mt-3"
                style={{ fontWeight: "600", textShadow: "5px 5px 5px #5b5b5b" }}
              >
                this field must be more than 5 characters... !
              </p>
            ) : (
              ""
            )}
            {title.length > 80 ? (
              <p
                className="text-danger mt-3"
                style={{ fontWeight: "600", textShadow: "5px 5px 5px #5b5b5b" }}
              >
                this field can't be more than 80 characters... !
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="d-block mb-2">
            <label htmlFor="body" className="text-white p-3 ">
              body
            </label>
            <textarea
              type="text"
              id="body"
              placeholder="body"
              onChange={(e) => setBody(e.target.value)}
              style={{
                height: "200px",
                resize: "none",
                boxShadow: "5px 5px 5px gray",
                fontWeight: "600",
              }}
              className="form-control"
              value={body}
            ></textarea>
            {body.length === 0 ? (
              <p
                className="text-danger mt-3"
                style={{ fontWeight: "600", textShadow: "5px 5px 5px #5b5b5b" }}
              >
                this field required ... !
              </p>
            ) : (
              ""
            )}
            {body.length >= 1 && body.length < 20 ? (
              <p
                className="text-danger mt-3"
                style={{ fontWeight: "600", textShadow: "5px 5px 5px #5b5b5b" }}
              >
                this field must be more than 20 characters... !
              </p>
            ) : (
              ""
            )}
            {body.length > 500 ? (
              <p
                className="text-danger mt-3"
                style={{ fontWeight: "600", textShadow: "5px 5px 5px #5b5b5b" }}
              >
                this field can't be more than 500 characters... !
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <button
              type="submit"
              value="create"
              className="btn btn-light px-4 py-1 d-block mx-auto mt-4 text-capitalize "
              style={{
                width: "100px",
                boxShadow: "5px 5px 5px gray",
                fontWeight: "600",
              }}
              disabled={
                title.length > 5 && body.length > 20 ? null : "disabled"
              }
            >
              create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
