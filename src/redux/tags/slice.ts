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
			const filteredTags = state.tags.filter(
				(tag) => tag.name !== action.payload.name
			);

			const tag = state.tags.find((tag) => tag.name === action.payload.name);

			state.tags = [
				{ name: tag!.name, completedRounds: tag!.completedRounds + 1 },
				...filteredTags,
			];
		},

		removeTag(state, action: PayloadAction<Tag>) {
			state.tags = state.tags.filter((tag) => tag.name !== action.payload.name);
			state.currentTag = state.tags[0] ? state.tags[0] : initialTag;
		},
	},
});

export const { addTag, setCurrentTag, addCompletedRound, removeTag } =
	tagsSlice.actions;

export default tagsSlice.reducer;
