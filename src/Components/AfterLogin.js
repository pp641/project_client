import React from "react";
import { useSelector } from "react-redux";
import SuccessComponents from "./MainComponents/successComponents";
const AfterLogin = () => {
  const state = useSelector((state) => state);
  const isLogin = state.AuthReducers.accountLoginDetails.success;
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [show, setShow] = React.useState(<div>Show</div>);

  return isLogin || localStorage.getItem("token") ? (
    <div>
      <SuccessComponents />
    </div>
  ) : (
    <div>Failure</div>
  );
};

export default AfterLogin;
