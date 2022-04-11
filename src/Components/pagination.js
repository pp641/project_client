import * as React from "react";
import { useRef } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import PaginationView from "./paginationView";
import PopModal from "./popUpQuestionModal";
import { openPopModal } from "../Redux/actions";
import {
  getCurrentPostHtml,
  getAllAuthors,
  getAllRecords,
  getRecordCount,
} from "../Redux/actions";
import { sendLikeStatus } from "../Redux/AuthRedux/actions";
import AuthorSearch from "./MainComponents/authorSearch";
import { useNavigate } from "react-router-dom";
import FullScreenDialog from "./popUpQuestionModal";
const BasicPagination = () => {
  const navigate = useNavigate();
  const prevCountRef = useRef();
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const isLogin = records.AuthReducers.accountLoginDetails.success;
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = React.useState("");
  const [currentPostHtml, setCurrentPostHtml] = React.useState("");
  const [currentLink, setCurrentLink] = React.useState();
  const [x, setX] = React.useState(1);
  const [currentRecord, setCurrentRecord] = React.useState([]);
  const showRecords = async () =>
    currentRecord.map((records) => (
      <li key={records._id} style={objectStyle}>
        {console.log(currentUser.hasDone.includes(records._id))}
        <button
          onClick={() => {
            dispatch(sendLikeStatus(records._id, currentUser.email, "like"));
          }}
          disabled={currentUser.hasDone.includes(records._id)}
        >
          {" "}
          Like
        </button>
        <button
          onClick={() => {
            dispatch(sendLikeStatus(records._id, currentUser.email, "dislike"));
          }}
          disabled={!currentUser.hasDone.includes(records._id)}
        >
          Dislike
        </button>
        <div>Author id : {records.author_id}</div>
        <div>Category : {records.category}</div>
        <div>last Updated : {records.last_updated}</div>
        <div>Link : {records.link}</div>
        <div>Title : {records.title}</div>
      </li>
    ));

  React.useEffect(async () => {
    dispatch(getAllAuthors());
    localStorage.setItem(
      "recordArray",
      JSON.stringify(records.ArticleReducers.getAllAuthors)
    );
    setCurrentUser(JSON.parse(localStorage.getItem("payload")));
    dispatch(
      await getAllRecords({
        searchQuery: records.ArticleReducers.currentSearchQuery,
        authorId: records.ArticleReducers.currentSelectedAuthor,
        category: records.ArticleReducers.currentSelectedCategory,
        x: x,
      })
    );
    setCurrentRecord(records.ArticleReducers.getAllArticleBatchWise);
  }, [x]);

  React.useEffect(() => {
    dispatch(getCurrentPostHtml(currentLink));
  }, [currentLink]);

  const objectStyle = {
    border: "2px solid black",
    width: "40%",
    padding: "1em",
    margin: "1em",
    float: "left",
  };

  return isLogin || localStorage.getItem("token") ? (
    <React.Fragment>
      <FullScreenDialog />
      <AuthorSearch />
      <button
        onClick={() => {
          dispatch(
            getAllRecords({
              searchQuery: records.ArticleReducers.currentSearchQuery,
              authorId: records.ArticleReducers.currentSelectedAuthor,
              category: records.ArticleReducers.currentSelectedCategory,
              x: 1,
            })
          );
          setX(1);
        }}
      >
        {" "}
        Perfom Search Filter
      </button>
      <div>
        <ul>
          {currentRecord?.map((records) => (
            <li key={records._id} style={objectStyle}>
              {console.log(currentUser.hasDone.includes(records._id))}
              <button
                onClick={() => {
                  dispatch(
                    sendLikeStatus(records._id, currentUser.email, "like")
                  );
                }}
                disabled={currentUser.hasDone.includes(records._id)}
              >
                {" "}
                Like
              </button>
              <button
                onClick={() => {
                  dispatch(
                    sendLikeStatus(records._id, currentUser.email, "dislike")
                  );
                }}
                disabled={!currentUser.hasDone.includes(records._id)}
              >
                Dislike
              </button>
              <div>Author id : {records.author_id}</div>
              <div>Category : {records.category}</div>
              <div>last Updated : {records.last_updated}</div>
              <div>Link : {records.link}</div>
              <div>Title : {records.title}</div>
              <button
                onClick={() => {
                  dispatch(openPopModal(true));
                  setCurrentLink(records.link);
                }}
              >
                {" "}
                click to read full Post
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Pagination
          count={500}
          onChange={(e, val) => {
            setX(val);
            setCurrentRecord(records.ArticleReducers.getAllArticleBatchWise);
          }}
          color="secondary"
        />
      </div>
    </React.Fragment>
  ) : (
    <div>Failure</div>
  );
};

export default BasicPagination;
