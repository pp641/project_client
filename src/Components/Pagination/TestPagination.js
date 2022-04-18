import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthorSearch from "../MainComponents/authorSearch";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  getAllAuthors,
  getAllRecords,
  getCurrentLink,
  getCurrentPostHtml,
  getSearchQuery,
  getSelectedAuthor,
  getSelectedCategory,
  openPopModal,
  resetCurrentAuthor,
  resetCurrentSearchQuery,
  setCurrentPage,
} from "../../Redux/actions";
import FullScreenDialog from "./popUpQuestionModal";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import MapCurrentArray from "./mapCurrentArray";
import { useNavigate } from "react-router-dom";
const TestPagination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const records = useSelector((state) => state);
  const isLogin = records.AuthReducers.accountLoginDetails.success;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("payload"))
  );
  const [hasDone, setHasDone] = useState(
    JSON.parse(localStorage.getItem("payload")).hasDone
  );
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
  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);



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

  return isLogin || localStorage.getItem("token") ? (
    <React.Fragment>
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
          Previous page
          <ArrowBackIos />
        </Button>
        <Button
          style={{ margin: " 0px 10px 0px 10px" }}
          variant="contained"
          color="success"
          disabled={currentRecord?.length < 90 && currentRecord?.length !== 0}
          onClick={() => {
            dispatch(setCurrentPage(records.ArticleReducers.currentPage + 1));
          }}
        >
          Next page
          <ArrowForwardIosIcon />
        </Button>
        <Button
          style={{ margin: " 0px 10px 0px 10px" }}
          variant="contained"
          onClick={async () => {
            dispatch(getSearchQuery(""));
            dispatch(getSelectedCategory(""));
            dispatch(getSelectedAuthor(""));
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
          Search
        </Button>
        <Button
          variant="contained"
          style={{ margin: " 0px 10px 0px 10px" }}
          color="error"
          onClick={() => {
            navigate("/profile");
          }}
        >
          Your Profile
        </Button>
      </div>
      <div>
        {console.log("ok", currentRecord)}
        <MapCurrentArray record={currentRecord} />
      </div>
    </React.Fragment>
  ) : (
    <div> You are not authorized to view this page </div>
  );
};

export default TestPagination;
