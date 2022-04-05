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
const BasicPagination = () => {
  const prevCountRef = useRef();
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
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
    dispatch(
      await getAllRecords({
        searchQuery: records.ArticleReducers.currentSearchQuery,
        authorId: records.ArticleReducers.currentSelectedAuthor,
        category: records.ArticleReducers.currentSelectedCategory,
        x: x,
      })
    );
    setCurrentUser(JSON.parse(localStorage.getItem("payload")));
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

  return (
    <React.Fragment>
      <PopModal />
      <AuthorSearch />
      {console.log("Thiss", prevCountRef.current, currentRecord)};
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
        <Stack spacing={5}>
          <Pagination
            count={400000 / 90 + 1}
            defaultPage={1}
            onChange={(e, val) => {
              setX(val);
              setCurrentRecord(records.ArticleReducers.getAllArticleBatchWise);
            }}
            color="secondary"
          />
        </Stack>
      </div>
      <PaginationView />
    </React.Fragment>
  );
};

export default BasicPagination;
