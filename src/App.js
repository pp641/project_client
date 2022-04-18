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

function Home() {
  return <h1>Home</h1>;
}

<<<<<<< Updated upstream
// function Dashboard() {
//   return (

//     <div>
//       <Typography
//         variant="h3"
//       >
//         Dashboard
//       </Typography>
//       <div>
//         <Link to="/login">
//           <Button
//             variant="contained"
//             color="primary"
//           >
//             Login
//           </Button>
//         </Link>
//         <Link to="/register">
//           <Button
//             variant="contained"
//             color="success"
//           >
//             Register
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }
=======
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography
        variant="h3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Dashboard
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 10px 10px 10px",
        }}
      >
        <Button
          variant="contained"
          style={{ margin: "0px 10px 0px 10px" }}
          onClick={() => {
            navigate("/login");
          }}
          color="primary"
        >
          Login
        </Button>
        <Button
          onClick={() => {
            navigate("/register");
          }}
          style={{ margin: "0px 10px 0px 10px" }}
          variant="contained"
          color="success"
        >
          Register
        </Button>
        <Button
          disabled={localStorage.getItem("payload") === ""}
          onClick={() => {
            navigate("/pagination");
          }}
          style={{ margin: "0px 10px 0px 10px" }}
          variant="contained"
          color="error"
        >
          Pagination
        </Button>
      </div>
    </div>
  );
}
>>>>>>> Stashed changes

function Invoices() {
  return <h1>Invoices</h1>;
}

function Team() {
  return <h1>Team</h1>;
}

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
