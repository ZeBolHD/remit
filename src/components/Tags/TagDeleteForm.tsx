import { Tag } from "../../types";

interface TagDeleteFormProps {
	closePortal: () => void;
	tag: Tag;
}

export const TagDeleteForm = ({ closePortal, tag }: TagDeleteFormProps) => {
	return (
		<form className="text-primary-dark dark:text-primary">
			<h3>Delete tag {tag.name}?</h3>
			<div>
				<button className="py-[5px] px-[15px] border-[2px] border-primary-dark dark:border-primary">
					Yes
				</button>
				<button
					className="py-[5px] px-[15px] border-[2px] border-primary-dark dark:border-primary"
					onClick={closePortal}
				>
					No
				</button>
			</div>
		</form>
	);
};
