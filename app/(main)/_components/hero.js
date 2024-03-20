"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundRects from "./backgroundrects";
import Link from "next/link";

const Hero = () => {
	const [text, count] = useTypewriter({
		words: ["You're here, at last.", "The place to come."],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundRects />
			<img
				src="/BKTSK-logo.svg"
				alt="BKTSK Icon"
				className="relative h-32 w-32 mx-auto object-cover"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					BKTSK.com
				</h2>
				<h1 className="text-3xl lg:text-4xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#cccc00" />
				</h1>
				<div className="pt-5">
					<Link href="#about">
						<button type="button" className="heroButton">
							About
						</button>
					</Link>
					<Link href="#services">
						<button type="button" className="heroButton">
							Services
						</button>
					</Link>
					<Link href="#sites">
						<button type="button" className="heroButton">
							Sites
						</button>
					</Link>
					<Link href="#contact">
						<button type="button" className="heroButton">
							Contact
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
