import { useState } from "react";

import { useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";

import { Portal } from "../Portal";

import { selectTags } from "../../redux/selectors";

import { TagsListItem } from "./TagsListItem";
import { TagAddFrom } from "./TagAddForm";

export const Tags = () => {
	const [isAddFormOpen, setIsAddFormOpen] = useState(false);

	const { tags } = useSelector(selectTags);

	const openAddForm = () => {
		setIsAddFormOpen(true);
	};

	const closeAddForm = () => {
		setIsAddFormOpen(false);
	};

	const tagList = tags.map((tag) => <TagsListItem tag={tag} key={tag.name} />);

	return (
		<div
			className="w-full h-full mt-[50px] border-[2px] border-primary-dark dark:border-primary 
		relative rounded-medium max-h-[750px]"
		>
			<button
				className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-dark"
				onClick={openAddForm}
			>
				<CiCirclePlus size={70} />
			</button>
			<div
				className="h-[50vh] mt-[50px] py-[10px] px-[50px] text-[20px] overflow-y-auto no-scrollbar 
			laptop:w-[500px] laptop:mx-auto laptop:text-[30px] laptop:h-[90%] laptop:mt-[50px]"
			>
				{tags.length === 0 ? (
					<h2 className="text-center">Add you're first tag</h2>
				) : (
					<ul>{tagList}</ul>
				)}
			</div>

			{isAddFormOpen && (
				<Portal closePortal={closeAddForm}>
					<TagAddFrom tags={tags} closePortal={closeAddForm} />
				</Portal>
			)}
		</div>
	);
};
