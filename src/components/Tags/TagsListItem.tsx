import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { Tag } from "../../types";
import { Portal } from "../Portal";

import { TagDeleteForm } from "./TagDeleteForm";

interface TagsListItemProps {
	tag: Tag;
}

export const TagsListItem = ({ tag }: TagsListItemProps) => {
	const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);

	const openDeleteForm = () => {
		setIsDeleteFormOpen(true);
	};

	const closeDeleteForm = () => {
		setIsDeleteFormOpen(false);
	};

	return (
		<li className="mt-[30px] first-[mt-0] relative">
			<h5 className="text-[20px] text-primary-dark dark:text-primary">
				{tag.name}
			</h5>
			<RxCross2
				className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
				onClick={openDeleteForm}
				size={20}
			/>
			{isDeleteFormOpen && (
				<Portal closePortal={closeDeleteForm}>
					<TagDeleteForm tag={tag} closePortal={closeDeleteForm} />
				</Portal>
			)}
			<div className="w-full h-[2px] bg-primary-dark dark:bg-primary" />
		</li>
	);
};
