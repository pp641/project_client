import { Pagination } from "@mui/material";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import AfterLogin from "./Components/AfterLogin";
import AccountCreation from "./Components/Auth/accountCreation";
import UserLogin from "./Components/Auth/userLogin";
import CountrySelect from "./Components/MainComponents/authorSearch";
import BasicPagination from "./Components/pagination";
import PopUpQuestionModal from "./Components/popUpQuestionModal";
function Home() {
  return <h1>Home</h1>;
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/invoices">Invoices</Link>
      <Link to="/team">Team</Link>
      <hr />
      <Outlet />
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
      <Route path="/pagination" element={<BasicPagination />} />
      <Route path="/tester" element={<CountrySelect />} />
      <Route path = "/viewPost" element = {<PopUpQuestionModal/>} />
    </Routes>
  );
}
export default App;
