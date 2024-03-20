"use client";

import React from "react";
import { motion } from "framer-motion";
import SiteCard from "./sitecard";
import SitesData from "../_json/sites.json";

const Sites = () => {
	const sites = SitesData.sites;
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Sites
			</h3>

			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-bktsk-yellow-400/80">
				{sites.map((site, i) => {
					return <SiteCard key={site.enName} site={site} />;
				})}
			</div>

			<div className="w-full absolute top-[30%] bg-bktsk-blue-300/30 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	);
};

export default Sites;
