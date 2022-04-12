import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { Button, TextField } from "@mui/material";
import {
  createAccount,
  setCurrentStatus,
  setSnackBar,
} from "../../Redux/AuthRedux/actions";
import CustomizedSnackbars from "../../common/snackBarComponent";
import { useNavigate } from "react-router-dom";

const AccountCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "1em",
          width: "40%",
        }}
      >
        <TextField
          id="outlined-basic"
          margin="normal"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your Name"
          label="Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          margin="normal"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your Email"
          label="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="text"
          margin="normal"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your Password"
          label="Password"
          variant="outlined"
        />
        <Button
          style={{ marginTop: "10px" }}
          onClick={() => {
            dispatch(createAccount({ name, email, password }));
          }}
          variant="contained"
        >
          Register
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AccountCreation;
