import { Chip, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveCat, setFormOpen } from "../features/catSlice";
import "./CatListItem.css";

const CatListItem = ({ name, image, clicks, nicknames, active }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ListItemButton
        onClick={() => {
          dispatch(
            setActiveCat({
              name: name,
              image: image,
              clicks: clicks,
              nicknames: nicknames,
            })
          );
          dispatch(setFormOpen(false));
        }}
        selected={active}
        divider
      >
        <ListItemText sx={{ textTransform: "capitalize" }} primary={name} />
        <Chip label={clicks} className="chip" />
      </ListItemButton>
    </>
  );
};

export default CatListItem;
