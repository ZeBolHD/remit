import { BsCircleHalf, BsCircleFill, BsCircle } from "react-icons/bs";

interface Status {
	type: "filled" | "halfFilled" | "empty";
}

const icons = {
	filled: <BsCircleFill />,
	halfFilled: <BsCircleHalf />,
	empty: <BsCircle />,
};

export const Status = ({ type }: Status) => {
	return (
		<li
			className="ml-[10px] first:ml-0 w-[15px] h-[15px] 
    laptop:h-[20px] laptop:w-[20px] laptop:ml-[45px]"
		>
			{icons[type]}
		</li>
	);
};
