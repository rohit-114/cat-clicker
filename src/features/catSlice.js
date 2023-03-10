import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  activeCat: {},
  formOpen: false,
};

const catSlice = createSlice({
  name: "cat",
  initialState: initialState,
  reducers: {
    addCat(state, action) {
      const cat = state.cats.find((cat) => cat.name === action.payload.name);
      if (cat) {
        const { name, image, clicks, nicknames } = action.payload;
        cat.name = name;
        cat.image = image;
        cat.clicks = clicks;
        cat.nicknames = nicknames;
      } else {
        state.cats.push(action.payload);
      }
      state.activeCat = action.payload;
    },
    incrementClick(state, action) {
      const cat = state.cats.find((cat) => cat.name === action.payload);
      if (cat) {
        cat.clicks++;
      }
      state.activeCat = cat;
    },
    setActiveCat(state, action) {
      state.activeCat = action.payload;
    },
    setFormOpen(state, action) {
      state.formOpen = action.payload;
    },
  },
});

export const { addCat, incrementClick, setActiveCat, setFormOpen } =
  catSlice.actions;
export const selectCats = (state) => state.cats;
export const selectActiveCat = (state) => state.activeCat;
export const selectFormOpen = (state) => state.formOpen;
export default catSlice.reducer;
