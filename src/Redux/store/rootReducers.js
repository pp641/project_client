import ArticleReducers from "../reducers";
import AuthReducers from "../AuthRedux/reducers";
import { combineReducers } from "redux";

export default combineReducers({
  ArticleReducers,
  AuthReducers,
});
