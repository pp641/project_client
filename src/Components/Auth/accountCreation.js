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
import { ValidateEmail } from "../../common/isValidEmail";
import { red } from "@mui/material/colors";
import { textAlign } from "@mui/system";
import reg_icon from "../../images/register_icon.png"

const AccountCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <React.Fragment>
      <div className="container-fluid p-0 d-flex justify-content-center login_back">
        <div className="register_box p-4">

          <div className="row">
            <div className="col-8">
              <div className="row p-4">
                <h1>User Registration</h1>
              </div>
            </div>
            <div className="col-4"></div>
          </div>


          <div className="row">
            <div className="col-8">
              <div className="row row_pad">
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
              </div>
              <div className="row row_pad">
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
              </div>
              <div className="row row_pad">
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
              </div>
              <div className="row row_pad">
                <Button
                  style={{ marginTop: "20px", marginBottom:"30px" }}
                  onClick={() => {
                    if (
                      name.length < 5 ||
                      password.length < 5 ||
                      ValidateEmail(email) === false
                    ) {
                      dispatch(setCurrentStatus(404));
                    } else {
                      dispatch(createAccount({ name, email, password }));
                      dispatch(setCurrentStatus(200));
                    }
                  }}
                  variant="contained"
                >
                  Register
                </Button>
              </div>
            </div>

            <div className="col-4">
              <div className="row d-flex justify-content-center">
                <img src={reg_icon} className="reg_icon" alt="Registration"/>
              </div>

              <div className="row p-2">
                <h3>OR</h3>
              </div>
              <div className="row d-flex justify-content-center">
                <Button
                  className="dash_btns"
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                
              </div>

              <div className="row d-flex justify-content-center mt-3">
                <Button
                  className="dash_btns"
                  variant="contained"
                  color="warning"
                  onClick={() => {
                  navigate("/");
                  }}
                >
                  Home
                </Button>
              </div>
              
            </div>
          </div>

          <div>
            <CustomizedSnackbars />
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
};

export default AccountCreation;
