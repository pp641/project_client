import renderHTML from "react-render-html";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { openPopModal } from "../Redux/actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state);

  const [open, setOpen] = React.useState(records.ArticleReducers.openPopModal);
  const [currentHtml, setCurrentHtml] = React.useState("");
  React.useEffect(() => {
    setCurrentHtml(records.ArticleReducers.getCurrentPostHtml);
  }, [records.ArticleReducers.getCurrentPostHtml]);

  const handleClickOpen = () => {
    setOpen(records.ArticleReducers.openPopModal);
  };

  const handleClose = () => {
    dispatch(openPopModal(false));
    setOpen(records.ArticleReducers.openPopModal);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={records.ArticleReducers.openPopModal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {renderHTML(String(currentHtml))};
      </Dialog>
    </div>
  );
}
