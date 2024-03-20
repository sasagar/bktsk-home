import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "BKTSK.com",
	description: "The place I reach.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ja">
			<body className={`${inter.className}`}>
				<div className="bg-zinc-900 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-bktsk-yellow-400/80">
					{/* Header */}
					<Header />

					{children}

					{/* Footer */}
					<Footer />
				</div>
			</body>
		</html>
	);
}
