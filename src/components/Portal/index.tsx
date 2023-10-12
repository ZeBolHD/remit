import { motion } from "framer-motion";
import { createPortal } from "react-dom";

interface PortalProps {
	closePortal: () => void;
	children: React.ReactNode;
}

export const Portal = ({ children, closePortal }: PortalProps) => {
	const portal = document.getElementById("portal");

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="absolute w-full h-full backdrop-blur-sm z-50 flex items-center justify-center px-[45px]"
			onClick={closePortal}
		>
			{children}
		</motion.div>,
		portal!
	);
};
