"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const ServiceCard = ({ service }) => {
	const [jaName, setJaName] = useState("");

	useEffect(() => {
		if (service.jaName) {
			setJaName(() => {
				return (
					<>
						<span className="text-bktsk-blue-400"> | </span>
						{service.jaName}
					</>
				);
			});
		} else {
			setJaName(() => {
				return "";
			});
		}
	}, [service.jaName]);

	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center p-8 hover:opacity-100 lg:opacity-40 bg-zinc-800/50 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="w-24 h-24 xl:w-[100px] xl:h-[100px] object-cover object-center"
				src={service.serviceImg}
				alt={service.enName}
			/>

			<div className="px-0 mx:px-10">
				<h4 className="text-xl font-light">
					{service.enName}
					{jaName}
				</h4>
				<p className="font-bold text-xl mt-1">{service.platform}</p>
				<p className="uppercase py-5 text-gray-300 text-sm">
					{service.description}
				</p>
				<ul className="list-disc space-y-2 ml-5 text-sm">
					{service.meta.map((m) => {
						return <li key={m}>{m}</li>;
					})}
				</ul>
				{service.url ? (
					<a
						href={service.url}
						className="flex flex-row items-center justify-center gap-2 text-sm bg-bktsk-blue-900 lg:bg-bktsk-blue-600/70 lg:hover:bg-bktsk-blue-900 py-2 px-4 rounded-sm mt-5 transition-all"
						target="_blank"
						rel="noreferrer"
					>
						Visit <ArrowTopRightOnSquareIcon className="w-4 h-4" />
					</a>
				) : (
					""
				)}
			</div>
		</article>
	);
};

export default ServiceCard;
