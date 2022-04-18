import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";

import {
  getAllSavedRecordsUserWise,
  getCurrentLink,
  getCurrentPostHtml,
  openPopModal,
} from "../../Redux/actions";
import ProfileComponentOne from "./ProfileComponentOne";
import UserSavedRecords from "./mapFavouriteItemsArray";
import FullScreenDialog from "../Pagination/popUpQuestionModal";
import {
  removeCurrentFavPost,
  setCurrentStatus,
} from "../../Redux/AuthRedux/actions";
import CustomizedSnackbars from "../../common/snackBarComponent";
const ObjectStyle = {
  backgroundColor: "#f1f1f1",
  margin: "10px",
  padding: "20px",
  fontSize: "10px",
  maxWidth: "400px",
  border: "2px solid black",
};
const ProfilePage = () => {
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const [profilePageDetails, setProfilePageDetails] = React.useState(
    JSON.parse(localStorage.getItem("payload"))
  );

  const [currentUserEmail, setCurrentUserEmail] = React.useState(
    JSON.parse(localStorage.getItem("payload")).email
  );

  useEffect(() => {
    dispatch(getAllSavedRecordsUserWise(currentUserEmail));
  }, [records.AuthReducers.removeCurrentFavPost]);

  React.useEffect(() => {
    dispatch(getCurrentPostHtml(records.ArticleReducers.currentOpenedLink));
  }, [records.ArticleReducers.currentOpenedLink]);

  return (
    <React.Fragment>
      {console.log("profile", profilePageDetails)}
      <ProfileComponentOne />
      <br /> <br />
      <FullScreenDialog />
      <Typography variant="h2">All Favorite Posts</Typography>
      <div
        style={{
          display: "flex",
          backgroundcolor: "DodgerBlue",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {records.ArticleReducers?.allSavedRecordsUserWise?.map((data) => (
          <div key={data._id} style={ObjectStyle}>
            <Typography variant="h5" color="brown">
              Author id : {data.author_id}
            </Typography>
            <Typography>Category : {data.category}</Typography>
            <Typography>last Updated : {data.last_updated}</Typography>
            <Typography>Title : {data.title}</Typography>
            <Button variant="contained" color="success" href={data.link}>
              Original Post Link
            </Button>
            <br />
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(setCurrentStatus(504));
                dispatch(openPopModal(true));
                dispatch(getCurrentLink(data.link));
              }}
            >
              Read Here
            </Button>
            <Button
              onClick={() => {
                dispatch(removeCurrentFavPost(currentUserEmail, data._id));
                dispatch(setCurrentStatus(501));
              }}
              variant="contained"
              color="info"
            >
              Remove from Liked Posts
            </Button>
          </div>
        ))}
      </div>
     </React.Fragment>
  );
};

export default ProfilePage;
