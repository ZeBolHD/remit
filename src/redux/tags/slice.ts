import { createSlice } from "@reduxjs/toolkit";

type Tag = { name: string; completedRounds: number };

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
