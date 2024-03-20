"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./servicecard";
import ServiceData from "../_json/services.json";

const Services = () => {
	const services = ServiceData.services;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Services
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-bktsk-yellow-400/80">
				{services.map((service) => {
					return <ServiceCard key={service.enName} service={service} />;
				})}
			</div>
		</motion.div>
	);
};

export default Services;
