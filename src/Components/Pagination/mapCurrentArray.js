import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../Styles/cardStyles.scss";
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
      {currentRecord?.length === 0 ? (
        <div>PLease wait while records are loading</div>
      ) : (
        <div class="container">
          <div class="card__container">
            {currentRecord?.map((data) => (
              <div class="card">
                <div class="card__content">
                  {records.AuthReducers.currentUser[0].hasDone.includes(
                    data._id
                  ) === true ? (
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(
                          sendLikeStatus(data._id, currentEmail, "dislike")
                        );
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
                        dispatch(
                          sendLikeStatus(data._id, currentEmail, "like")
                        );
                        dispatch(currentUserDetails(currentEmail));
                        dispatch(setCurrentStatus(500));
                      }}
                    >
                      <FavoriteBorderIcon />
                    </span>
                  )}
                  <p class="card__info">Author id : {data.author_id}</p>
                  <p class="card__info">Category : {data.category}</p>
                  <p class="card__info">Last Updated : {data.last_updated}</p>
                  <p class="card__info">Title : {data.title}</p>
                </div>
                <Button
                  target="_blank"
                  variant="contained"
                  color="success"
                  href={data.link}
                  className="card_content"
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
        </div>
      )}
      <CustomizedSnackbars />
    </>
  );
};

export default MapCurrentArray;
