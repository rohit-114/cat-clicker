import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveCat,
  selectCats,
  selectFormOpen,
  setFormOpen,
} from "../features/catSlice";
import CatCard from "./CatCard";
import CatGallery from "./CatGallery";
import CatListItem from "./CatListItem";
import Form from "./Form";
import "./Main.css";

const Main = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const cats = useSelector(selectCats);
  const { name, image, clicks, nicknames } = useSelector(selectActiveCat);
  const formOpen = useSelector(selectFormOpen);
  const dispatch = useDispatch();

  return (
    <Grid container mt={isSmall && 1} gap={isSmall ? 0 : 4}>
      <Grid item xs={12} md={3} mt={isSmall && 3}>
        <ul className="list-container">
          {cats?.map((cat) => (
            <CatListItem
              key={cat.name}
              name={cat.name}
              image={cat.image}
              clicks={cat.clicks}
              nicknames={cat.nicknames}
              active={cat.name === name}
            />
          ))}
        </ul>
      </Grid>

      <Grid item xs={12} sm={6} md={4} mt={isSmall && 3}>
        <CatCard
          name={name}
          image={image}
          clicks={clicks}
          nicknames={nicknames}
        />
      </Grid>

      <Grid item xs={12} sm={5} md={4} mt={isSmall && 3}>
        {!formOpen ? (
          <Button
            onClick={() => dispatch(setFormOpen(true))}
            color="info"
            variant="contained"
            fullWidth={isSmall}
          >
            Open Form
          </Button>
        ) : (
          <Form />
        )}
      </Grid>

      <Grid item xs={12} mt={isSmall && 3}>
        <CatGallery />
      </Grid>
    </Grid>
  );
};

export default Main;
