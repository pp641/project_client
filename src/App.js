import { Pagination, Typography } from "@mui/material";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AfterLogin from "./Components/AfterLogin";
import AccountCreation from "./Components/Auth/accountCreation";
import UserLogin from "./Components/Auth/userLogin";
import CountrySelect from "./Components/MainComponents/authorSearch";
import BasicPagination from "./Components/pagination";
import PopUpQuestionModal from "./Components/popUpQuestionModal";
import TestPage from "./Components/testPage";
import TestPagination from "./Components/TestPagination";
import { Button } from "reactstrap";
function Home() {
  return <h1>Home</h1>;
}

function Dashboard() {
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
        <Link to="/login">
          <Button
            variant="contained"
            style={{ margin: "0px 10px 0px 10px" }}
            color="primary"
          >
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button
            style={{ margin: "0px 10px 0px 10px" }}
            variant="contained"
            color="success"
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

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
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/AfterLogin" element={<AfterLogin />} />
      <Route path="/team" element={<Team />} />
      <Route path="/pagination" element={<TestPagination />} />
      <Route path="/tester" element={<CountrySelect />} />
      <Route path="/viewPost" element={<PopUpQuestionModal />} />
      <Route path="/tester2" element={<TestPage />} />
      <Route path="/testingPage" element={<TestPagination />} />
    </Routes>
  );
}
export default App;
