"use client";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
	return (
		<motion.div
			onClick={onClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="backdrop"
		>
			{children}
		</motion.div>
	);
};

export default Backdrop;
