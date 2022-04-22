import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import CustomizedSnackbars from "../../common/snackBarComponent";
import {
  createAccount,
  LoginAccount,
  setCurrentStatus,
} from "../../Redux/AuthRedux/actions";

const UserLogin = () => {
  const records = useSelector((state) => state);
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const stateValues = useSelector((state) => state);

  useEffect(() => {
    localStorage.getItem("token") != undefined
      ? navigate("/pagination")
      : setCurrentStatus(404);
  }, [localStorage.getItem("token")]);

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center">
        <div className="login_box p-2">
          <div className="login_box_sub">
            <div className="row p-4">
              <div className="col-12 p-4">
                <h1>User Login</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <TextField
                  type="text"
                  margin="normal"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="outlined-basic"
                  label="User Email"
                  variant="outlined"
                  className="txt_fld"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <TextField
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  className="txt_fld"
                />
              </div>
            </div>

            <div className="row p-4">
              <div className="col-4"></div>
              <div className="col-4">
                <Button
                  style={{ marginTop: "0.5em" }}
                  variant="conatined"
                  color="danger"
                  className="dash_btns"
                  onClick={() => {
                    dispatch(LoginAccount({ email, password }));
                  }}
                >
                  {" "}
                  Login
                </Button>

                <Button
                  style={{ marginTop: "0.5em" }}
                  variant="conatined"
                  color="info"
                  className="dash_btns"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  {" "}
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomizedSnackbars />
    </React.Fragment>
  );
};

export default UserLogin;
