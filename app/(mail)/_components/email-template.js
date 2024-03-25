import * as React from "react";
import { Tailwind } from "@react-email/components";

const EmailTemplate = ({ name, email, subject, message }) => {
	return (
		<html lang="ja">
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>BKTSK.com | Contact Mail</title>
			</head>
			<body>
				<Tailwind
					config={{
						theme: {
							extend: {
								colors: {
									"bktsk-blue": {
										50: "#f0f3ff",
										100: "#e4e9ff",
										200: "#ccd5ff",
										300: "#a4b2ff",
										400: "#707eff",
										500: "#373fff",
										600: "#130fff",
										700: "#0000ff",
										800: "#0002da",
										900: "#0000ac",
										950: "#00087a",
									},
									"bktsk-yellow": {
										50: "#fbffe7",
										100: "#f4ffc1",
										200: "#eeff86",
										300: "#ecff41",
										400: "#f2ff0d",
										500: "#ffff00",
										600: "#d1bf00",
										700: "#a68b02",
										800: "#896c0a",
										900: "#74580f",
										950: "#443004",
									},
								},
							},
						},
					}}
				>
					<div className="relative bg-zinc-900 text-white px-6 py-10 min-h-screen">
						<header className="text-center mb-5">
							<img
								src="https://bktsk.com/BKTSK-logo.svg"
								alt="logo"
								className="w-24 mx-auto"
							/>
						</header>
						<main className="space-y-5">
							<h1 className="text-3xl font-bold">Thanks, {name}!</h1>
							<p>
								Thank you for your interest in BKTSK.com. We will be in touch
								shortly.
							</p>
							<div className="space-y-1">
								<h3 className="text-lg font-semibold text-bktsk-yellow-500 border-b border-bktsk-blue-300">
									Name
								</h3>
								<p>{name}</p>
							</div>

							<div className="space-y-1">
								<h3 className="text-lg font-semibold text-bktsk-yellow-500 border-b border-bktsk-blue-300">
									Email
								</h3>
								<p>{email}</p>
							</div>

							<div className="space-y-1">
								<h3 className="text-lg font-semibold text-bktsk-yellow-500 border-b border-bktsk-blue-300">
									Subject
								</h3>
								<p>{subject}</p>
							</div>

							<div className="space-y-1">
								<h3 className="text-lg font-semibold text-bktsk-yellow-500 border-b border-bktsk-blue-300">
									Message
								</h3>
								<pre>{message}</pre>
							</div>
						</main>

						<footer className="w-full bg-zinc-700/50 text-center text-zinc-300 text-xs py-3 snap-end fixed bottom-0 left-0">
							&copy; 2024 BKTSK.com | ぼくのたどりつくばしょ
						</footer>
					</div>
				</Tailwind>
			</body>
		</html>
	);
};
export default EmailTemplate;
