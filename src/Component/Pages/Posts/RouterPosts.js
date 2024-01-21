import { Route, Routes } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";
import Posts from "./Posts";
import ShowPost from "./Show";

const RouterPosts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/:id" element={<ShowPost />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
};

export default RouterPosts;
