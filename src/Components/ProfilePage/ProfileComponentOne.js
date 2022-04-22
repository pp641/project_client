import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProfileComponentOne = (props) => {
  const navigate = useNavigate();
  const [profilePageDetails, setProfilePageDetails] = React.useState(
    JSON.parse(localStorage.getItem("payload"))
  );
  return (
    <div className='container'>
      <div className="profile_box p-5 shadow rounded border">
        <div className="row p-3">
          <Typography variant="h3" className="h3"> Welcome to the Profile </Typography>
        </div>

        <div className="row p-3">
          <Typography variant="h5">
              User Name : {profilePageDetails.name}
          </Typography>
        </div>

        <div className="row p-1">
          <Typography variant="h5">Email : {profilePageDetails.email}</Typography>
        </div>
        
      </div>
      <Button         variant  = "contained"
 onClick  = {()=>{
        navigate("/pagination")
      }}> go to all Posts</Button>
    </div>
  );
};

export default ProfileComponentOne;
