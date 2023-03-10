import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { incrementClick, setFormOpen } from "../features/catSlice";

const CatCard = ({ name, image, clicks, nicknames, gallery }) => {
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(incrementClick(name));
    dispatch(setFormOpen(false));
    window.scrollTo(0, 0);
  };

  return (
    <Card sx={{ maxWidth: 430, border: 1, borderColor: "#b9b9b9" }}>
      <CardContent sx={{ paddingBottom: 1 }}>
        <Typography sx={{ textTransform: "capitalize" }} variant="h5">
          {name}
        </Typography>
        <Typography color={"gray"} variant="subtitle1" gutterBottom>
          No. of times clicked: {clicks}
        </Typography>
      </CardContent>
      <CardMedia
        onClick={handler}
        sx={{ height: 200, cursor: "pointer" }}
        image={image}
        component="img"
      />
      <CardContent sx={{ paddingTop: 1 }}>
        {!gallery && (
          <>
            <Typography variant="subtitle2" mt={2}>
              {clicks >= 0 && clicks <= 5 && "Infant"}
              {clicks >= 6 && clicks <= 12 && "Child"}
              {clicks >= 13 && clicks <= 25 && "Young"}
              {clicks >= 26 && clicks <= 40 && "Middle-Age"}
              {clicks >= 41 && clicks <= 60 && "Old"}
              {clicks >= 61 && "Very Old"}
            </Typography>
            <Typography variant="body2">{nicknames}</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default CatCard;
