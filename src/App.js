import { Button, Pagination, Typography } from "@mui/material";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import AfterLogin from "./Components/AfterLogin";
import Dashboard from "./Components/dashboard";
import AccountCreation from "./Components/Auth/accountCreation";
import UserLogin from "./Components/Auth/userLogin";
import CountrySelect from "./Components/MainComponents/authorSearch";
import PopUpQuestionModal from "./Components/Pagination/popUpQuestionModal";
import TestPagination from "./Components/Pagination/TestPagination";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<AccountCreation />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/AfterLogin" element={<AfterLogin />} />
      <Route path="/pagination" element={<TestPagination />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
export default App;
