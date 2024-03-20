import About from "./_components/about";
import Hero from "./_components/hero";
import Services from "./_components/services";
import Sites from "./_components/sites";
import Contact from "./_components/contact";

export default function Home() {
	return (
		<main>
			<section id="hero" className="snap-start">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="services" className="snap-center">
				<Services />
			</section>

			<section id="sites" className="snap-center">
				<Sites />
			</section>

			<section id="contact" className="snap-start">
				<Contact />
			</section>
		</main>
	);
}
