import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import RouterPosts from "../Pages/Posts/RouterPosts";
import RouterUsers from "../Pages/Users/RouterUsers";

const App = () => {
    return ( 
        <>
           <BrowserRouter>
           <Header/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/users/*" element={<RouterUsers/>} />
                  <Route path="/posts/*" element={<RouterPosts/>} />
              </Routes>
           </BrowserRouter>
        </>
     );
}
 
export default App;