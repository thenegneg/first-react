import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <>
          <div className="container-fluid bg-dark text-white">
              <ul className="d-flex w-100 p-3  ">
                  <li className="list-unstyled ">
                      <NavLink className={(navDate)=>navDate.isActive?"bg-light text-dark nav-link px-3 py-1 me-3 rounded-4":"text-ehite nav-link  px-3 py-1 me-3 rounded-4"} to="/" >
                           Home
                      </NavLink>
                  </li>
                  <li className="list-unstyled">
                      <NavLink className={(navDate)=>navDate.isActive?"bg-light text-dark nav-link  px-3 py-1 me-3 rounded-4":"text-ehite nav-link  px-3 py-1 me-3 rounded-4"} to="/users" >
                      users
                      </NavLink>
                  </li>
                  <li className="list-unstyled">
                      <NavLink className={(navDate)=>navDate.isActive?"bg-light text-dark nav-link  px-3 py-1 me-3 rounded-4":"text-ehite nav-link  px-3 py-1 me-3 rounded-4"} to="/posts" >
                      posts
                      </NavLink>
                  </li>
              </ul>
          </div>
        </>
     );
}
 
export default Header;