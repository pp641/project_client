import axios from "axios";

export const getAllAuthors = () => async (dispatch) => {
  await axios
    .get("http://localhost:7074/api/getAllAuthors")
    .then((response) => {
      dispatch({
        type: "GET_ALL_AUTHORS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALL_AUTHORS_FAILED",
        payload: error,
      });
    });
};

export const getAllSavedRecordsUserWise = (data) => async (dispatch) => {
  await axios
    .post("http://localhost:7074/api/getAllSavedRecordUserWise", {
      email: data,
    })
    .then(async (response) => {
      console.log(response.data);
      await dispatch({
        type: "USER_SAVED_RECORDS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "USER_SAVED_RECORDS_FAILED",
        payload: error,
      });
    });
};

export const getSelectedAuthor = (data) => async (dispatch) =>
  dispatch({
    type: "GET_SELECTED_AUTHOR",
    payload: data,
  });

export const getCurrentLink = (data) => async (dispatch) =>
  dispatch({
    type: "CURRENT_OPENED_LINK",
    payload: data,
  });

export const setCurrentPage = (data) => async (dispatch) =>
  dispatch({
    type: "SET_CURRENT_PAGE",
    payload: data,
  });

export const getTotalPages = (data) => async (dispatch) =>
  dispatch({
    type: "GET_TOTAL_PAGES",
    payload: data,
  });

export const getSelectedCategory = (data) => async (dispatch) =>
  dispatch({
    type: "GET_SELECTED_CATEGORY",
    payload: data,
  });

export const getSearchQuery = (data) => async (dispatch) =>
  dispatch({
    type: "GET_SEARCH_QUERY",
    payload: data,
  });

export const getAllRecords = async (records) => async (dispatch) => {
  await axios
    .post("http://localhost:7074/api/getRecordsByFilterOperations", records)
    .then((response) => {
      dispatch({
        type: "GET_ALL_RECORDS",
        payload: response.data.records,
      });
      dispatch({
        type: "GET_TOTAL_PAGES",
        payload: response.data.totalpages,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALL_RECORDS_FAILED",
        payload: error,
      });
    });
};

export const getAllUsers = async (data) => async (dispatch) => {
  await axios
    .post("/api/getAllUsers", { data: data })
    .then((response) => {
      dispatch({
        type: "GET_ALL_USERS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALL_USERS_FAILED",
        payload: error,
      });
    });
};
export const getAllArticlesByAuthorId =
  async (authorId) => async (dispatch) => {
    await axios
      .get(`/api/getAllRecordsByAuthorId/${authorId}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_ALL_ARTICLES_BY_USER",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_ALL_ARTICLES_BY_USER_FAILED",
          payload: error,
        });
      });
  };

export const getCurrentPostHtml = (link) => (dispatch) => {
  console.log("link", link);
  axios
    .post("http://localhost:7074/api/getCurrentPost", { link: link })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: "GET_CURRENT_POST_HTML",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_CURRENT_POST_HTML_FAILED",
        payload: error,
      });
    });
};

export const openPopModal = (data) => async (dispatch) =>
  dispatch({
    type: "OPEN_POPUP_MODAL",
    payload: data,
  });
