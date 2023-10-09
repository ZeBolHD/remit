import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Tag } from "../../types";

interface TagsState {
	currentTag: Tag;
	tags: Tag[];
}

const initialTag: Tag = {
	name: "My New Tag",
	completedRounds: 0,
};

const initialState: TagsState = {
	currentTag: initialTag,
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

		setCurrentTag(state, action: PayloadAction<Tag>) {
			state.currentTag = action.payload;
		},

		addCompletedRound(state, action: PayloadAction<Tag>) {
			state.tags = state.tags.map((tag) => {
				if (tag.name === action.payload.name) {
					return { ...tag, completedRounds: tag.completedRounds + 1 };
				}

				return tag;
			});
		},

		removeTag(state, action: PayloadAction<Tag>) {
			state.tags = state.tags.filter((tag) => tag.name !== action.payload.name);
		},
	},
});

export const { addTag, setCurrentTag, addCompletedRound, removeTag } =
	tagsSlice.actions;

export default tagsSlice.reducer;
