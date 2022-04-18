import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  currentUserDetails,
  sendLikeStatus,
  setCurrentStatus,
} from "../../Redux/AuthRedux/actions";
import {
  getCurrentLink,
  getCurrentPostHtml,
  openPopModal,
} from "../../Redux/actions";
import FullScreenDialog from "./popUpQuestionModal";
import { useNavigate } from "react-router-dom";
import CustomizedSnackbars from "../../common/snackBarComponent";

const MapCurrentArray = (props) => {
  const navigate = useNavigate();
  const records = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentRecord = props.record;

  const ObjectStyle = {
    backgroundColor: "#f1f1f1",
    margin: "10px",
    padding: "20px",
    fontSize: "10px",
    maxWidth: "400px",
    border: "2px solid black",
  };

  const [currentEmail, setCurrentEmail] = useState(
    JSON.parse(localStorage.getItem("payload")).email
  );
  React.useEffect(() => {
    dispatch(getCurrentPostHtml(records.ArticleReducers.currentOpenedLink));
  }, [records.ArticleReducers.currentOpenedLink]);

  React.useEffect(() => {
    dispatch(currentUserDetails(currentEmail));
  }, [records.AuthReducers.hasUserMarked]);

  return (
    <>
      <FullScreenDialog />
      {console.log("thiss", records.AuthReducers.currentUser)}
      {currentRecord?.length === 0 ? (
        <div>PLease wait while records are loading</div>
      ) : (
        <div
          style={{
            display: "flex",
            backgroundcolor: "DodgerBlue",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {currentRecord?.map((data) => (
            <div key={data._id} style={ObjectStyle}>
              <Typography variant="h5" color="brown">
                Author id : {data.author_id}
              </Typography>
              {records.AuthReducers.currentUser[0].hasDone.includes(
                data._id
              ) === true ? (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(sendLikeStatus(data._id, currentEmail, "dislike"));
                    dispatch(currentUserDetails(currentEmail));
                    dispatch(setCurrentStatus(501));
                  }}
                >
                  <FavoriteIcon />
                </span>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(sendLikeStatus(data._id, currentEmail, "like"));
                    dispatch(currentUserDetails(currentEmail));
                    dispatch(setCurrentStatus(500));
                  }}
                >
                  <FavoriteBorderIcon />
                </span>
              )}
              <Typography>Category : {data.category}</Typography>
              <Typography>last Updated : {data.last_updated}</Typography>
              <Typography>Title : {data.title}</Typography>
              <Button
                target="_blank"
                variant="contained"
                color="success"
                href={data.link}
              >
                Original Post Link
              </Button>
              <br />
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(openPopModal(true));
                  dispatch(getCurrentLink(data.link));
                }}
              >
                Read Here
              </Button>
            </div>
          ))}
        </div>
      )}
      <CustomizedSnackbars />
    </>
  );
};

export default MapCurrentArray;
