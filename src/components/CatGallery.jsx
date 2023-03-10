import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectCats } from "../features/catSlice";
import CatCard from "./CatCard";

const CatGallery = () => {
  const cats = useSelector(selectCats);

  return (
    <Box>
      <Typography
        py={1}
        mb={3}
        borderTop={1}
        borderBottom={1}
        borderColor={"gray"}
        variant="h5"
        gutterBottom
      >
        Cat Gallery
      </Typography>

      <Grid container spacing={4}>
        {cats.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat.name}>
            <CatCard
              name={cat.name}
              image={cat.image}
              clicks={cat.clicks}
              nicknames={cat.nicknames}
              gallery
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CatGallery;
