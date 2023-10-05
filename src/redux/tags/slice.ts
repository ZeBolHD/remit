import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "../../types";

interface TagsState {
  tags: Tag[];
}

const initialState: TagsState = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
