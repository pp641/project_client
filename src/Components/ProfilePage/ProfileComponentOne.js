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
    <div>
      <Typography variant="h3"> Welcome to the profile </Typography>
      <Typography variant="h5">
        User Name : {profilePageDetails.name}
      </Typography>
      <Typography variant="h5">Email : {profilePageDetails.email}</Typography>
    </div>
  );
};

export default ProfileComponentOne;
