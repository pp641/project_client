import React, { useEffect } from "react";
import ProfileComponentOne from "./ProfileComponentOne";
import HasDoneArray from "./hasDoneArray";
const ProfilePage = () => {
  const [profilePageDetails, setProfilePageDetails] = React.useState(
    JSON.parse(localStorage.getItem("payload"))
  );
  return (
    <React.Fragment>
      <ProfileComponentOne profile={profilePageDetails} />
      <HasDoneArray email={profilePageDetails.email} />
    </React.Fragment>
  );
};

export default ProfilePage;
