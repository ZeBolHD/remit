import { useAppDispatch } from "../../redux/store";
import { removeTag } from "../../redux/tags/slice";

import { Tag } from "../../types";

import { FormButton } from "./FormButton";

interface TagDeleteFormProps {
	closePortal: () => void;
	tag: Tag;
}

export const TagDeleteForm = ({ closePortal, tag }: TagDeleteFormProps) => {
	const dispatch = useAppDispatch();

	const onClickDelete = () => {
		dispatch(removeTag(tag));
		closePortal();
	};

	return (
		<form
			className="h-[250px] py-[50px] w-full text-center bg-primary flex flex-col
			dark:bg-primary-dark border-[2px] border-primary-dark dark:border-primary rounded-medium"
		>
			<h3 className="text-primary-dark dark:text-primary text-[20px]">
				Delete tag {tag.name}?
			</h3>
			<div className="mt-auto mb-0 flex justify-between px-[40px]">
				<FormButton text="Yes" onClick={onClickDelete} />
				<FormButton text="No" onClick={closePortal} />
			</div>
		</form>
	);
};
