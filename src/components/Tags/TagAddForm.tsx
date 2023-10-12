import React, { useState } from "react";

import { useAppDispatch } from "../../redux/store";
import { addTag } from "../../redux/tags/slice";
import { Tag } from "../../types";

import { FormButton } from "./FormButton";

interface TagAddFromProps {
	tags: Tag[];
	closePortal: () => void;
}

export const TagAddFrom = ({ tags, closePortal }: TagAddFromProps) => {
	const [inputValue, setInputValue] = useState("New Tag");
	const [textError, setTextError] = useState("");

	const dispatch = useAppDispatch();

	const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (tags.find((tag) => tag.name === inputValue)) {
			setTextError("Tag already exists");
			return;
		}

		if (inputValue === "") {
			setTextError("Tag cannot be empty");
			return;
		}

		dispatch(addTag(inputValue));

		closePortal();
	};

	return (
		<form
			className="w-full h-[250px] box-border flex flex-col pt-[40px] pb-[20px] px-[25px]
        text-center text-[20px] text-primary-dark dark:text-primary
        bg-primary dark:bg-primary-dark border-[2px] border-primary-dark dark:border-primary rounded-medium z-[50]"
			onSubmit={onSubmit}
			onClick={(e) => e.stopPropagation()}
		>
			<h3>Add tag</h3>
			<div className="mt-[30px]">
				<input
					className="bg-transparent bg-bottom text-center w-full focus:border-primary-dark 
						dark:focus:border-primary outline outline-0"
					type="text"
					value={inputValue}
					onChange={onChangeInputValue}
					autoFocus
				/>
				<div className="w-full h-[2px] bg-primary-dark dark:bg-primary" />
			</div>
			<p className="text-[14px] m-auto text-active">{textError}</p>
			<FormButton text="Done" type="submit" />
		</form>
	);
};
