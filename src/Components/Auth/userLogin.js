import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { createAccount, LoginAccount } from "../../Redux/AuthRedux/actions";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const stateValues = useSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1em",
        width: "40%",
      }}
    >
      <div>UserLogin</div>
      <TextField
        type="text"
        margin="normal"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <TextField
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button
        style={{ marginTop: "0.5em" }}
        variant="conatined"
        color="danger"
        onClick={() => {
          dispatch(LoginAccount({ email, password }));
          navigate("/AfterLogin");
        }}
      >
        Login{" "}
      </Button>
    </div>
  );
};

export default UserLogin;
