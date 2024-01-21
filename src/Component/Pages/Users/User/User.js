import { Link } from "react-router-dom";

const User = ({user}) => {
    return ( 
        <>
           <div className="col-3 bg-dark p-3 m-3 rounded-4 shadow">
               <div className="col-12">
                   <Link to={`/users/${user.id}`} className="text-decoration-none" style={{color:"lightgray"}}>
                      {user.name}
                   </Link>
               </div>
               <ul className="w-100 p-0">
                   <li className="w-100 ps-2 list-unstyled my-1"> {user.username} </li>
                   <li className="w-100 ps-2 list-unstyled my-1"> {user.email} </li>
                   <li className="w-100 ps-2 list-unstyled my-1"> {user.phone} </li>
                   <li className="w-100 ps-2 list-unstyled my-1"> {user.website} </li>
               </ul>
           </div>
        </>
     );
}
 
export default User;