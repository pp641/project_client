import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getAllAuthors } from "../../Redux/actions";
import {
  getSelectedAuthor,
  getSelectedCategory,
  getSearchQuery,
} from "../../Redux/actions";
import { margin } from "@mui/system";
export default function ComboBox() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state);
  const [authors, setAuthors] = React.useState(
    details.ArticleReducers.getAllAuthors
  );
  const [selectedAuthor, setSelectedAuthor] = React.useState("");
  const [newCountries, setNewCountries] = React.useState([]);
  const [categoryLevel, setCategoryLevel] = React.useState([
    "easy",
    "medium",
    "hard",
    "expert",
  ]);
  const [selectedCategory, setSelectedCategory] = React.useState("");

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          margin: " 0px 10px 0px 10px",
          justifyContent: "center",
        }}
      >
        <TextField
          style={{ margin: " 0px 10px 0px 10px" }}
          id="outlined-basic"
          value={details.ArticleReducers.currentSearchQuery}
          onChange={(e) => {
            dispatch(getSearchQuery(e.target.value));
          }}
          label="Outlined"
          variant="outlined"
        />
        <Autocomplete
          style={{ margin: " 0px 10px 0px 10px" }}
          disablePortal
          value={details.ArticleReducers.currentSelectedAuthor}
          id="combo-box-demo"
          onChange={(event, value) => {
            dispatch(getSelectedAuthor(value));
          }}
          options={details.ArticleReducers.getAllAuthors}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Current Author" />
          )}
        />
        <Autocomplete
          style={{ margin: " 0px 10px 0px 10px" }}
          disablePortal
          id="combo-box-demo"
          value={details.ArticleReducers.currentSelectedCategory}
          onChange={(event, value) => {
            dispatch(getSelectedCategory(value));
          }}
          options={categoryLevel}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Current Category" />
          )}
        />
      </div>
      <div>{selectedAuthor}</div>
      <br />
      <div>{selectedCategory}</div>
    </React.Fragment>
  );
}
