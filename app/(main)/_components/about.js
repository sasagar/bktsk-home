"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src="/bktsk-google-banner.svg"
				className="-mb-20 md:mb-0 flex-shrink-0 max-w-56 max-h-56 object-cover md:max-w-64 md:max-h-95 xl:max-w-[500px] xl:max-h-[600px]"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">Where the place I reach.</h4>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus quibusdam earum tempora laudantium quae totam
					voluptatem reiciendis? Praesentium fugiat odio perspiciatis porro
					deserunt. Quidem deleniti architecto eos! Officiis, esse nostrum.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
