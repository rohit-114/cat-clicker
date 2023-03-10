import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCat, selectActiveCat, setFormOpen } from "../features/catSlice";

const Form = () => {
  const activeCat = useSelector(selectActiveCat);
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState(activeCat);

  const handleFormInput = (e) => {
    setFormInput({ ...formInput, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addCat({ ...formInput, name: formInput.name.toLowerCase() }));
    dispatch(setFormOpen(false));
  };

  return (
    <Stack
      component="form"
      spacing={2}
      p={3}
      sx={{ border: 1, borderColor: "#b9b9b9", borderRadius: 1 }}
    >
      <TextField
        id="name"
        value={formInput.name}
        onChange={handleFormInput}
        label="Cat Name"
        variant="outlined"
      />
      <TextField
        id="image"
        value={formInput.image}
        onChange={handleFormInput}
        label="Cat Image"
        variant="outlined"
      />
      <TextField
        id="clicks"
        value={formInput.clicks}
        onChange={handleFormInput}
        label="Cat Clicks"
        variant="outlined"
      />
      <TextField
        id="nicknames"
        value={formInput.nicknames}
        onChange={handleFormInput}
        label="Cat Nickname"
        variant="outlined"
      />
      <Box>
        <Button
          onClick={handleFormSubmit}
          sx={{ marginRight: 2 }}
          color="success"
          variant="contained"
        >
          Save
        </Button>
        <Button
          onClick={() => dispatch(setFormOpen(false))}
          color="error"
          variant="contained"
        >
          Undo
        </Button>
      </Box>
    </Stack>
  );
};

export default Form;
