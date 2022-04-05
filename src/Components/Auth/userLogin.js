import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount, LoginAccount } from "../../Redux/AuthRedux/actions";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const stateValues = useSelector((state) => state);

  return (
    <div>
      <div>UserLogin</div>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(LoginAccount({ email, password }));
          // window.location.reload("/AfterLogin");
          navigate("/AfterLogin");
        }}
      >
        Login{" "}
      </button>
    </div>
  );
};

export default UserLogin;
