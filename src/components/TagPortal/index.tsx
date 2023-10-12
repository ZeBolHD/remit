import { motion } from "framer-motion";
import React, { useState } from "react";
import { createPortal } from "react-dom";

import { useAppDispatch } from "../../redux/store";
import { addTag } from "../../redux/tags/slice";
import { Tag } from "../../types";

interface TagPortalProps {
	tags: Tag[];
	closeForm: () => void;
}

export const TagPortal = ({ tags, closeForm }: TagPortalProps) => {
	const [inputValue, setInputValue] = useState("New Tag");

	const dispatch = useAppDispatch();

	const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (tags.find((tag) => tag.name === inputValue)) {
			return;
		}

		dispatch(addTag(inputValue));

		closeForm();
	};

	const portal = document.getElementById("portal");

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="absolute w-full h-full backdrop-blur-sm z-50 flex items-center justify-center px-[45px]"
			onClick={closeForm}
		>
			<form
				className="w-full h-[250px] box-border flex flex-col py-[40px] px-[25px] justify-between
        text-center text-[20px] text-primary-dark dark:text-primary
        bg-primary dark:bg-primary-dark border-[2px] border-primary-dark dark:border-primary rounded-medium z-[50]"
				onSubmit={onSubmit}
				onClick={(e) => e.stopPropagation()}
			>
				<h3>Add tag</h3>
				<div className="text">
					<input
						className="bg-transparent bg-bottom text-center focus:border-primary-dark 
						dark:focus:border-primary outline outline-0"
						type="text"
						value={inputValue}
						onChange={onChangeInputValue}
						autoFocus
					/>
					<div className="w-full h-[2px] bg-primary-dark dark:bg-primary" />
				</div>
				<button
					className="py-[5px] px-[10px] rounded-medium bg-primary-dark dark:bg-primary w-fit mx-auto
          text-primary dark:text-primary-dark
          "
					type="submit"
				>
					Done
				</button>
			</form>
		</motion.div>,
		portal!
	);
};
