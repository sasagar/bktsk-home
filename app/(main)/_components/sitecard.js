"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import * as Devicon from "devicons-react";

const SiteCard = ({ site }) => {
	return (
		<div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 h-full">
			<motion.img
				initial={{
					y: -150,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				src={site.img}
				alt=""
				className="max-w-[300px] max-h-[300px]"
			/>

			<div className="space-y-7 px-0 md:px-10 max-w-6xl">
				<h4 className="text-2xl font-semibold text-center">
					<span className=" text-bktsk-bktsk-yellow-500 inline-block border-b-2 border-b-bktsk-blue-400 px-3">
						{site.enName}
					</span>
					<br />
					{site.jaName ? (
						<span className="text-lg text-bktsk-bktsk-yellow-500">
							{site.jaName}
						</span>
					) : (
						""
					)}
				</h4>
				{site.tech && site.tech.length > 0 ? (
					<TechIcons techs={site.tech} />
				) : (
					""
				)}
				<p className="text-sm text-center md:text-left">{site.description}</p>
				{site.url ? (
					<a
						href={site.url}
						className="flex flex-row items-center justify-center gap-2 text-sm text-black font-semibold bg-bktsk-yellow-500 lg:bg-bktsk-yellow-600/70 lg:hover:bg-bktsk-yellow-500 py-2 px-4 rounded-sm mt-5 w-64 mx-auto transition-all"
						target="_blank"
						rel="noreferrer"
					>
						Visit <ArrowTopRightOnSquareIcon className="w-4 h-4" />
					</a>
				) : (
					""
				)}
			</div>
		</div>
	);
};

const TechIcon = ({ tech }) => {
	const TechComponent = Devicon[tech];
	return <TechComponent size={24} color="rgb(161 161 170)" />;
};

const TechIcons = ({ techs }) => {
	return (
		<div className="flex flex-row justify-center items-center gap-2">
			{techs.map((tech) => {
				return <TechIcon tech={tech} key={tech} />;
			})}
		</div>
	);
};

export default SiteCard;
