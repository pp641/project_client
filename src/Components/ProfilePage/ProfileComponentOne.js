import { Typography } from "@mui/material";
import React, { useEffect } from "react";
const ProfileComponentOne = () => {
  const [profilePageDetails, setProfilePageDetails] = React.useState(
    JSON.parse(localStorage.getItem("payload"))
  );
  useEffect(() => {
    console.log(profilePageDetails);
  }, []);
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
    </div>
  );
};

export default ProfileComponentOne;
