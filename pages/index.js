import PageHead from "../components/PageHead";
import HeroSection from "../components/HeroSection";
import ShortIntro from "../components/ShortIntro";
import HomePageShortDoc from "../components/HomePageShortDoc";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

export default function Home() {
	return (
		<div className="bg-white">
			<PageHead title={'Fake Store API'}/>
			<Nav />
			<main className="overflow-hidden">
				<div className="container mx-auto px-3">
					<div className="2xl:w-9/12 sm:w-full mx-auto min-height-home-screen flex items-center">
						<HeroSection />
					</div>
				</div>
				<Banner />
				<div className="container mx-auto px-3">
					<div className="2xl:w-9/12 sm:w-full mx-auto">
						<ShortIntro />
						<HomePageShortDoc />
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
