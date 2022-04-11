import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthorSearch from "../Components/MainComponents/authorSearch";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  getAllRecords,
  getCurrentPostHtml,
  openPopModal,
  resetCurrentAuthor,
  resetCurrentSearchQuery,
  setCurrentPage,
} from "../Redux/actions";
import MediaCard from "./CardPost";
import FullScreenDialog from "./popUpQuestionModal";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
const TestPagination = () => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  const records = useSelector((state) => state);
  const isLogin = records.AuthReducers.accountLoginDetails.success;

  const [currentLink, setCurrentLink] = useState("");
  const [currentRecord, setCurrentRecord] = useState([]);
  const [category, setCategory] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const ObjectStyle = {
    backgroundColor: "#f1f1f1",
    margin: "10px",
    padding: "20px",
    fontSize: "10px",
    maxWidth: "400px",
    border: "2px solid black",
  };

  function MyComponent(props) {
    useEffect(() => {
      // do stuff here...
    }, []); // <-- empty dependency array
    return <div></div>;
  }

  useEffect(() => {
    records.ArticleReducers.getAllArticleBatchWise.length === 0 ? (
      <div>ok</div>
    ) : (
      setCurrentRecord(records.ArticleReducers.getAllArticleBatchWise)
    );
  }, [records]);
  useEffect(async () => {
    try {
      dispatch(
        await getAllRecords({
          searchQuery: records.ArticleReducers.currentSearchQuery,
          authorId: records.ArticleReducers.currentSelectedAuthor,
          category: records.ArticleReducers.currentSelectedCategory,
          x: records.ArticleReducers.currentPage,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, [records.ArticleReducers.currentPage]);

  React.useEffect(() => {
    dispatch(getCurrentPostHtml(currentLink));
  }, [currentLink]);

  return isLogin || localStorage.getItem("token") ? (
    <React.Fragment>
      {console.log("okrec", currentRecord)}
      <FullScreenDialog />
      <AuthorSearch />
      <div
        style={{
          display: "flex",

          justifyContent: "center",
        }}
      >
        <Button
          style={{ margin: " 0px 10px 0px 10px" }}
          variant="contained"
          color="error"
          disabled={records.ArticleReducers.currentPage <= 1}
          onClick={() => {
            dispatch(setCurrentPage(records.ArticleReducers.currentPage - 1));
          }}
        >
          decrement
          <ArrowBackIos />
        </Button>
        <Button
          style={{ margin: " 0px 10px 0px 10px" }}
          variant="contained"
          color="success"
          disabled={currentRecord.length < 90 && currentRecord.length !== 0}
          onClick={() => {
            dispatch(setCurrentPage(records.ArticleReducers.currentPage + 1));
          }}
        >
          Increment
          <ArrowForwardIosIcon />
        </Button>
        <Button
          style={{ margin: " 0px 10px 0px 10px" }}
          variant="contained"
          onClick={async () => {
            dispatch(resetCurrentAuthor(""));
            dispatch(resetCurrentSearchQuery(""));
            dispatch(setCurrentPage(1));
            dispatch(
              await getAllRecords({
                searchQuery: "",
                authorId: "",
                category: "",
                x: 1,
              })
            );
            setCurrentRecord(records.ArticleReducers.getAllArticleBatchWise);
          }}
        >
          reset
          <RestartAltIcon />
        </Button>
        <Button
          style={{ margin: " 0px 10px 0px 10px" }}
          variant="contained"
          onClick={async () => {
            dispatch(setCurrentPage(1));
            dispatch(
              await getAllRecords({
                searchQuery: records.ArticleReducers.currentSearchQuery,
                authorId: records.ArticleReducers.currentSelectedAuthor,
                category: records.ArticleReducers.currentSelectedCategory,
                x: records.ArticleReducers.currentPage,
              })
            );
            setCurrentRecord(records.ArticleReducers.getAllArticleBatchWise);
          }}
        >
          Perform search filter
        </Button>
      </div>
      {records.ArticleReducers.currentPage}
      <div>
        {console.log("ok", currentRecord)}
        {currentRecord.length === 0 ? (
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
            {currentRecord.map((records) => (
              <div key={records._id} style={ObjectStyle}>
                <Typography variant="h5" color="brown">
                  Author id : {records.author_id}
                </Typography>
                <Typography>Category : {records.category}</Typography>
                <Typography>last Updated : {records.last_updated}</Typography>
                <Typography>Link : {records.link}</Typography>
                <Typography>Title : {records.title}</Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(openPopModal(true));
                    setCurrentLink(records.link);
                  }}
                >
                  {" "}
                  click to read full Post
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  ) : (
    <div> You are not authorized to view this page </div>
  );
};

export default TestPagination;
