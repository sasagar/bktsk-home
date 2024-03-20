"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

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

			<div className="space-y-10 px-0 md:px-10 max-w-6xl">
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
				<p className="text-sm text-center md:text-left">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
					nemo tenetur corrupti maiores ullam est commodi pariatur ratione
					nesciunt obcaecati hic, voluptates itaque consectetur nisi dolores
					quidem aperiam recusandae iusto.
				</p>
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

export default SiteCard;
