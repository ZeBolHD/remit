import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "../../types";

interface TagsState {
  tags: Tag[];
}

const initialTag: Tag = {
  name: "My New Tag",
  completedRounds: 0,
};

const initialState: TagsState = {
  tags: [initialTag],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
});

export default tagsSlice.reducer;
