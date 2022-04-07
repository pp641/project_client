import axios from "axios";

export const setCurrentStatus = (data) => async (dispatch) =>
  dispatch({
    type: "CURRENT_STATUS_CODE",
    payload: data,
  });

export const createAccount = (data) => async (dispatch) => {
  await axios
    .post("http://localhost:7074/api/createAccount", data)
    .then((response) => {
      console.log("respsts", response.status);
      dispatch({
        type: "CREATE_ACCOUNT_SUCCESS",
        payload: response.data,
      });
      dispatch(setCurrentStatus(200));
    })
    .catch((error) => {
      console.log("respsts", error);
      dispatch(setCurrentStatus(404));
      dispatch({
        type: "CREATE_ACCOUNT_FAILED",
        payload: error,
      });
    });
};

export const LoginAccount = (data) => async (dispatch) => {
  await axios
    .post("http://localhost:7074/api/loginAccount", data)
    .then((response) => {
      console.log(response.data.payload.user);
      let record = JSON.stringify(response.data.payload.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("payload", record);
      dispatch({
        type: "LOGIN_ACCOUNT_SUCCESS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "LOGIN_ACCOUNT_FAILED",
        payload: error,
      });
    });
};

export const sendLikeStatus = (x1, x2, x3) => async (dispatch) => {
  console.log("data");
  await axios
    .patch(
      "http://localhost:7074/api/likeStatus",
      {
        data: [x1, x2, x3],
      },
      {
        headers: {
          Authorization: localStorage.getItem("token").replace("Bearer", ""),
          ContentType: "application/json",
        },
      }
    )
    .then((record) => {
      dispatch({
        type: "HAS_USER_MARKED",
        payload: record.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "HAS_USER_MARKED_FAILED",
        payload: error,
      });
    });
};

export const currentUserDetails = (data) => async (dispatch) => {
  await axios
    .post("http://localhost:7074/api/getcurrentUser", data)
    .then((response) => {
      dispatch({
        type: "GET_CURRENT_USER",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_CURRENT_USER_FAILED",
        payload: error,
      });
    });
};
