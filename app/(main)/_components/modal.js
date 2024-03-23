"use client";

import { motion } from "framer-motion";
import Backdrop from "./backdrop";

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 20,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

const Modal = ({ children, closeHandler }) => {
	return (
		<Backdrop onClick={closeHandler}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				id="modal"
				className="modal"
			>
				<span>{children}</span>
				<button
					onClick={closeHandler}
					type="button"
					className="bg-bktsk-blue-900 lg:bg-bktsk-blue-900/60 lg:hover:bg-bktsk-blue-900 py-3 px-5 rounded-md text-white font-bold text-base transition-all mt-7"
				>
					OK
				</button>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
