import { useState } from "react";

import { useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";

import { Portal } from "../Portal";

import { selectTags } from "../../redux/selectors";

import { TagsListItem } from "./TagsListItem";
import { TagAddFrom } from "./TagAddForm";

export const Tags = () => {
	const [isPortalOpen, setIsPortalOpen] = useState(false);

	const { tags } = useSelector(selectTags);

	const closePortal = () => {
		setIsPortalOpen(false);
	};

	return (
		<div
			className="w-full h-[350px] box-border relative border-[2px] 
      border-primary-dark dark:border-primary rounded-medium flex flex-col"
		>
			<button
				className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-dark"
				onClick={() => setIsPortalOpen(!isPortalOpen)}
			>
				<CiCirclePlus size={70} />
			</button>
			{isPortalOpen && (
				<Portal closePortal={closePortal}>
					<TagAddFrom tags={tags} closePortal={closePortal} />
				</Portal>
			)}

			<div className="mt-[50px] py-[10px] max-h-full overflow-y-hidden">
				<ul className="h-full overflow-y-auto no-scrollbar">
					{tags.map((tag) => (
						<TagsListItem tag={tag} key={tag.name} />
					))}
				</ul>
			</div>
		</div>
	);
};
