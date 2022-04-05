import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
  await axios
    .post("http://localhost:7074/api/getPosts", {
      headers: {
        Authorization: localStorage.getItem("token"),
        ContentType: "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: "GET_ALL_RECORDS",
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALL_RECORDS_FAILED",
        payload: error,
      });
    });
};
