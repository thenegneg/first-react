import { Route, Routes } from "react-router-dom";
import Show from "./Show/Show";
import Users from "./Users";

const RouterUsers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </>
  );
};

export default RouterUsers;
