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

	return (
		<div
			className="w-full h-full mt-[50px] relative border-[2px]
      border-primary-dark dark:border-primary rounded-medium"
		>
			<button
				className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-dark"
				onClick={openAddForm}
			>
				<CiCirclePlus size={70} />
			</button>

			{isAddFormOpen && (
				<Portal closePortal={closeAddForm}>
					<TagAddFrom tags={tags} closePortal={closeAddForm} />
				</Portal>
			)}

			{/* {isDeleteFormOpen && (
				<Portal closePortal={closeDeleteForm}>
					<TagDeleteForm tag={}/> 
				</Portal>
			)} */}
			<div className="overflow-hidden">
				{tags.length === 0 ? (
					<h2 className="text-[20px] text-center">Add you're first tag</h2>
				) : (
					<ul className="h-[50vh] overflow-y-auto no-scrollbar">
						{tags.map((tag) => (
							<TagsListItem tag={tag} key={tag.name} />
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
