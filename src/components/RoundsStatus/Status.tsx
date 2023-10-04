import { BsCircleHalf, BsCircleFill, BsCircle } from "react-icons/bs";

interface Status {
  type: "filled" | "halfFilled" | "empty";
}

const icons = {
  filled: <BsCircleFill size={15} />,
  halfFilled: <BsCircleHalf size={15} />,
  empty: <BsCircle size={15} />,
};

export const Status = ({ type }: Status) => {
  return <li className="ml-[10px] first:ml-0">{icons[type]}</li>;
};
