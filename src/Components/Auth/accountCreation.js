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

const AccountCreation = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <React.Fragment>
      <div
        style={{
          width: "23rem",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your Password"
          label="Password"
          variant="outlined"
        />
        <Button
          onClick={() => {
            dispatch(createAccount({ name, email, password }));
          }}
          variant="contained"
        >
          Register
        </Button>
      </div>
      <CustomizedSnackbars />;
    </React.Fragment>
  );
};

export default AccountCreation;
