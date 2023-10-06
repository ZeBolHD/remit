import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addTag(state, action: PayloadAction<string>) {
      state.tags = [
        { name: action.payload, completedRounds: 0 },
        ...state.tags,
      ];
    },
  },
});

export const { addTag } = tagsSlice.actions;

export default tagsSlice.reducer;
