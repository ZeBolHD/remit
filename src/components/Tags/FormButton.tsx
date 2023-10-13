interface FormButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export const FormButton = ({ text, ...props }: FormButtonProps) => {
	return (
		<button
			className="py-[5px] px-[15px] text-[20px] min-w-[80px] text-primary-dark dark:text-primary
      border-[2px] border-primary-dark dark:border-primary rounded-medium
      hover:bg-primary-dark hover:text-primary dark:hover:bg-primary hover:dark:text-primary-dark transition 
      duration-300"
			{...props}
		>
			{text}
		</button>
	);
};
