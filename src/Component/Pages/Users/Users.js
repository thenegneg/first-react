import { useEffect, useState } from "react";
import User from "./User/User";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchUsers = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await data.json();
      setUsers(res);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(true);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="col-12 p-4 mt-1 text-white">
        {loading && (
          <div className=" col-6 offset-3 text-center p-2 ">
            <span className="spinner-border text-dark"></span>
          </div>
        )}
        <div className="d-flex flex-wrap justify-content-center">
          {users &&
            users.map((elem) => {
              return <User user={elem} key={elem.id} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Users;
