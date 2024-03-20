"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
	return (
		<header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
			<motion.div
				initial={{ x: -500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center"
			>
				<SocialIcon
					url="https://x.com/sasagawaki"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://youtube.com/@s4s4p1y0"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/sasagar"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>

			<motion.div
				initial={{ x: 500, opacity: 0, scale: 0.5 }}
				animate={{ x: 0, opacity: 1, scale: 1 }}
				transition={{ duration: 1.5 }}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="gray"
					bgColor="transparent"
					href="#contact"
				/>

				<Link href="#contact">
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
						Get In Touch
					</p>
				</Link>
			</motion.div>
		</header>
	);
};

export default Header;
