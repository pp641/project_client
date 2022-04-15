import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import FullScreenDialog from "../Pagination/popUpQuestionModal";
import { useNavigate } from "react-router-dom";

const FavItemsArray = (props) => {
  const records = useSelector((state) => state);
  console.log("0okk", records.ArticleReducers);
  const dispatch = useDispatch();
  const currentRecord = props.records;

  const ObjectStyle = {
    backgroundColor: "#f1f1f1",
    margin: "10px",
    padding: "20px",
    fontSize: "10px",
    maxWidth: "400px",
    border: "2px solid black",
  };
  React.useEffect(() => {
    dispatch(getCurrentPostHtml(records.ArticleReducers.currentOpenedLink));
  }, [records.ArticleReducers.currentOpenedLink]);

  return (
    <>
      <FullScreenDialog />
      {console.log(
        "thiss ok",
        records.ArticleReducers?.allSavedRecordsUserWise
      )}
      {records.ArticleReducers?.allSavedRecordsUserWise?.length === 0 ? (
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
    </>
  );
};

export default FavItemsArray;
