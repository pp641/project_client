import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 2,
  width: 1 / 4,
  height: "250px",
};

export default function MediaCard() {
  return (
    <Card sx={{ ...commonStyles, borderColor: "secondary.main" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          display="flex"
          justifyContent="center"
          component="div"
        >
          Lizard
        </Typography>
        <Typography
          display="flex"
          justifyContent="center"
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
