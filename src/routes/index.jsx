import { Routes, Route } from "react-router-dom";

import HomePage from "../views/HomePage.jsx";
import LoginPage from "../views/LoginPage.jsx";

const index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default index;
