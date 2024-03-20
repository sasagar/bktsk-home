"use client";

import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = async (data) => {
		const res = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		console.log(res);

		if (res.status === 200) {
			alert("Email sent successfully!");
		} else {
			alert("Something went wrong, please try again.");
		}
	};

	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>

			<div className="flex flex-col space-y-10 max-w-full">
				<h4 className="text-2xl font-semibold text-center">
					Any questions?{" "}
					<span className="decoration-bktsk-yellow-200/50 underline">
						I'd love to talk.
					</span>
				</h4>

				<div className="space-y-5">
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-bktsk-blue-400 h-7 w-7 animate-pulse" />
						<p className="text-base">Tokyo, Japan</p>
					</div>

					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-bktsk-blue-400 h-7 w-7 animate-pulse" />
						<p className="text-base">From form below please.</p>
					</div>

					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-bktsk-blue-400 h-7 w-7 animate-pulse" />
						<p className="text-base">If needed, we can talk online.</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 max-w-full mx-auto"
				>
					<div className="flex space-y-2 flex-col md:flex-row md:space-x-2 md:space-y-0">
						<input
							{...register("name")}
							type="text"
							placeholder="Name"
							className="contactInput"
						/>
						<input
							{...register("email")}
							type="email"
							placeholder="Email"
							className="contactInput"
						/>
					</div>
					<input
						{...register("subject")}
						type="text"
						placeholder="Subject"
						className="contactInput"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput"
					/>
					<button
						type="submit"
						className="bg-bktsk-yellow-400 lg:bg-bktsk-yellow-500/60 lg:hover:bg-bktsk-yellow-500 py-3 px-5 rounded-md text-black font-bold text-base transition-all"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
