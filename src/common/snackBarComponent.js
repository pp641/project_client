import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStatus } from "../Redux/AuthRedux/actions";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const [open, setOpen] = React.useState(
    records.AuthReducers.currentStatusCode
  );

  const handleClick = () => {
    setOpen(records.AuthReducers.currentStatusCode);
  };

  const handleClose = (event, reason) => {
    dispatch(setCurrentStatus(0));
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const returnSwitch = (params) => {
    switch (params) {
      case 200:
        return <Alert severity="success">Login Success</Alert>;
      case 404:
        return <Alert severity="error">Login Failed</Alert>;
      case 500:
        return <Alert severity="info">Post Marked As Favourite</Alert>;
      case 501:
        return <Alert severity="warning">Post Removed From Favourites</Alert>;
      case 504:
        return (
          <Alert severity="success">Current Post Content Is loaded .....</Alert>
        );
      case 0:
        return <div></div>;
      default:
        return <Alert severity="warning">This is an warning message!</Alert>;
    }
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={records.AuthReducers.currentStatusCode}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        {returnSwitch(records.AuthReducers.currentStatusCode)}
      </Snackbar>
    </Stack>
  );
}
