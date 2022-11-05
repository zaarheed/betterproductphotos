import Footer from "@/components/shared/footer";
import { useState } from "react";
import Modal from "@/components/shared/modal";
import RegisterInterest from "@/components/shared/register-interest";

const cities = [
	{
		id: "london-united-kingdom",
		name: "London",
		country: "United Kingdom",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/london-united-kingdom.jpg",
		wifiSpeed: 28
	},
	{
		id: "lisbon-portugal",
		name: "Lisbon",
		country: "Portugal",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/lisbon-portugal.jpg",
		wifiSpeed: 28
	},
	{
		id: "bangkok-thailand",
		name: "Bangkok",
		country: "Thailand",
		temprature: 20,
		cost: "$1,851 / mo",
		thumbUrl: "/assets/bangkok-thailand.jpg",
		wifiSpeed: 28
	},
	{
		id: "madeira-portugal",
		name: "Madeira",
		country: "Portugal",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/madeira-portugal.jpg",
		wifiSpeed: 28
	},
	{
		id: "mexico-city-mexico",
		name: "Mexico City",
		country: "Mexico",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/mexico-city-mexico.jpg",
		wifiSpeed: 28
	},
	{
		id: "berlin-germany",
		name: "Berlin",
		country: "Germany",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/berlin-germany.jpg",
		wifiSpeed: 28
	},
	{
		id: "paris-france",
		name: "Paris",
		country: "France",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/paris-france.jpg",
		wifiSpeed: 28
	},
	{
		id: "istanbul-turkey",
		name: "Istanbul",
		country: "Turkey",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/istanbul-turkey.jpg",
		wifiSpeed: 28
	},
	{
		id: "new-york-city-united-states",
		name: "New York City",
		country: "United States",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/new-york-city-ny-united-states.jpg",
		wifiSpeed: 28
	},
	{
		id: "manchester-united-kingdom",
		name: "Manchester",
		country: "United Kingdom",
		temprature: 20,
		cost: "$3,335 / mo",
		thumbUrl: "/assets/manchester-united-kingdom.jpg",
		wifiSpeed: 28
	}
];

const freeFeatures = [
	"Explore Muslim and Halal-friendly cities",
	"Discover places to eat and stay",
	"Find Muslim and Halal-friendly places to live",
	"Attend local meetups and events"
];

const paidFeatures = [
	"Explore Muslim and Halal-friendly cities",
	"Discover places to eat and stay",
	"Find Muslim and Halal-friendly places to live",
	"Attend local meetups and events",
	"Get up to date COVID travel info",
	"Get unlimited members-only access in 195+ cities",
	"Get access to the paid Bedu List chat on Slack",
	"7-day money back guaranteed",
	"Learn how to get visas and resident permits",
	"Connect with others checked-in to your city",
	"Get alerts when new members join your city",
	"Unlock hundreds of filters",
	"Be the first to receive new Remote Job opportunities curated for Muslims"
];

export default function Home() {
	const [showModal, setModal] = useState(false);

	return (
		<div className="w-full flex flex-col bg-white dark:bg-zinc-900 dark:text-zinc-100">
			<div className="w-full flex flex-col">
				<div className="w-full max-w-4xl mx-auto py-32 px-4">
					<h1 className="text-4xl md:text-8xl font-black text-center">
						Discover yourself through travel
					</h1>
					<h3 className="font-poppins font-light text-2xl md:text-4xl text-center mt-5">
						{/* Being detached from the dunya and not allowing it to become home is essential to all Muslims */}
						The dua of travellers is accepted by Allah
					</h3>
					<div className="w-full flex flex-row justify-center my-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="12" y1="5" x2="12" y2="19" />
							<polyline points="19 12 12 19 5 12" />
						</svg>
					</div>

					<p className="text-xl md:text-2xl text-center text-zinc-500 font-light max-w-lg mx-auto">
						Discover the best places to travel and live as Muslims whilst meeting new people
					</p>

					<div className="w-full flex flex-row justify-center mt-8 mb-2">
						<button
							className={`
								font-extrabold text-center w-full text-xl md:text-4xl py-2 px-3 bg-black dark:bg-transparent text-white
								dark:text-zinc-100 group-hover:bg-white dark:group-hover:bg-transparent group-hover:text-black
								dark:group-hover:text-zinc-100 border-4 border-black dark:border-zinc-100
							`}
							type="button"
							onClick={() => setModal(true)}
						>
							<div className="font-extrabold text-center w-full text-xl md:text-4xl py-2 px-3 bg-black dark:bg-transparent text-white dark:text-zinc-100 group-hover:bg-white dark:group-hover:bg-transparent group-hover:text-black dark:group-hover:text-zinc-100">
								Join the global community &rarr;
							</div>
						</button>
						<Modal show={showModal} onClose={() => setModal(false)} size="sm">
							<RegisterInterest />
						</Modal>
					</div>
					<p className="text-center text-sm md:text-base font-semibold italic">
						Launching soon — Early signups get free access!
					</p>
				</div>
			</div>

			<div className="w-full flex flex-col max-w-6xl mx-auto px-4">
				<div className="w-full flex flex-row space-x-3 items-center my-2">
					<p className="text-4xl font-black">
						10 cities at launch including...
					</p>
				</div>
				<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
					{cities.map((city, index) => (
						<div className="relative group w-full aspect-square rounded-lg overflow-hidden">
							<img src={city.thumbUrl} className="absolute w-full h-full object-cover saturate-0 rounded-lg group-hover:saturate-100 group-hover:scale-105 duration-300" />
							<div className="z-10 w-full h-full flex flex-col justify-between relative group-hover:bg-black group-hover:bg-opacity-20 duration-200">
								<div className="relative w-full flex flex-row justify-between items-center px-4 py-3 text-white">
									<span className="">#{index + 1}</span>
									<div className="flex flex-col items-center">
										<span className="font-semibold">{city.wifiSpeed}</span>
										<span className="text-xs -mt-2">Mbps</span>
									</div>
								</div>
								<div className="w-full flex flex-col items-center justify-center text-white">
									<p
										className="font-bold text-xl md:text-2xl font-poppins group-hover:scale-125 duration-200"
										style={{ textShadow: "1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%)" }}
									>
										{city.name}
									</p>
									<p
										className="font-semibold text-base font-poppins group-hover:scale-90 duration-200"
										style={{ textShadow: "1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%)" }}
									>
										{city.country}
									</p>
								</div>
								<div className="w-full flex flex-row justify-between items-center px-4 py-3 text-white text-sm md:text-base">
									<span className="">{city.temprature}°C</span>
									<span className="">{city.cost}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="w-full mt-32">
				<div className="w-full max-w-6xl mx-auto flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-12 items-start px-4">
					<div className="relative w-full md:w-5/12 border-4 text-black dark:text-zinc-100 border-black dark:border-zinc-100 pt-8 p-4 flex flex-col items-center">
						<p className="font-black text-xl uppercase w-full text-left">Free</p>
						<p className="font-poppins font-black text-4xl uppercase w-full text-left mb-8">
							Use Bedu List as a travel guide on-the-go
						</p>
						{freeFeatures.map((feature, index) => (
							<div className="w-full flex flex-row items-start mb-2 font-light" ke={index}>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1 mr-2 shrink-0" fill="currentColor" stroke="none" viewBox="0 0 469.933 469.933">
									<path d="M429.281,44.605c-3.265-5.763-8.479-8.939-14.681-8.939c-3.482,0-6.997,1.018-9.912,2.818
											c-2.046,0.967-3.783,2.178-5.306,3.702c-92.628,92.594-171.423,169.412-254.288,242.798l-43.498-52.811
											c-4.222-5.126-8.927-6.203-12.126-6.203c-3.846,0-7.782,1.559-10.778,4.154l-0.708,0.375
											c-23.564,15.15-45.603,27.865-67.362,38.864c-5.799,2.925-9.178,7.982-9.335,13.939c-2.687,6.586-1.117,13.533,4.25,18.661
											c19.466,18.626,37.567,39.212,55.076,59.123c19.142,21.77,38.93,44.285,60.651,64.399c0.77,0.726,1.618,1.376,2.569,2.006
											c3.227,4.315,7.751,6.773,12.474,6.773c3.359,0,6.649-1.198,9.785-3.564c60.715-45.809,114.879-97.518,155.29-137.445
											c11.856-11.726,23.77-23.436,35.692-35.146c41.757-41.032,84.935-83.464,125.782-126.53c2.234-2.349,3.752-5.073,4.514-8.094
											c3.575-5.545,3.407-12.056-0.492-17.941C452.772,84.295,440.468,64.359,429.281,44.605z M429.103,114.131
											c-30.087,31.392-61.616,62.472-92.114,92.549c-16.103,15.868-32.194,31.739-48.145,47.705
											c-45.552,45.59-95.318,93.673-150.745,136.77c-18.121-17.701-35.15-37.013-51.633-55.705c-12.86-14.584-26.131-29.625-39.9-43.894
											c12.438-6.784,25.06-14.178,38.433-22.501l45.125,54.781c4.228,5.144,8.948,6.221,12.162,6.221c4.108,0,8.221-1.737,11.626-4.885
											c1.206-0.686,2.288-1.452,3.288-2.326c88.613-77.637,173.7-160.949,252.53-239.566C415.433,92.75,421.801,102.891,429.103,114.131
											z"
										/>
								</svg>
								<span className="text-xl">{feature}</span>
							</div>
						))}
					</div>
					<div className="relative w-full md:w-7/12 border-4 text-white dark:text-zinc-900 bg-black dark:bg-zinc-100 border-black dark:border-zinc-100 pt-8 p-4 flex flex-col items-center">
						<div className="absolute -top-8 right-6 border-4 text-lg border-white dark:border-zinc-900 text-white dark:text-zinc-900 py-2 px-3 uppercase bg-black dark:bg-zinc-100 font-black">
							Join the community
						</div>
						<p className="font-black text-xl uppercase w-full text-left">£9.99 / mo</p>
						<p className="font-poppins font-black text-4xl uppercase w-full text-left mb-8">
							Join Muslim nomads everywhere
						</p>
						{paidFeatures.map((feature, index) => (
							<div className="w-full flex flex-row items-start mb-2 font-light" ke={index}>
								<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1 mr-2 shrink-0" fill="currentColor" stroke="none" viewBox="0 0 469.933 469.933">
									<path d="M429.281,44.605c-3.265-5.763-8.479-8.939-14.681-8.939c-3.482,0-6.997,1.018-9.912,2.818
											c-2.046,0.967-3.783,2.178-5.306,3.702c-92.628,92.594-171.423,169.412-254.288,242.798l-43.498-52.811
											c-4.222-5.126-8.927-6.203-12.126-6.203c-3.846,0-7.782,1.559-10.778,4.154l-0.708,0.375
											c-23.564,15.15-45.603,27.865-67.362,38.864c-5.799,2.925-9.178,7.982-9.335,13.939c-2.687,6.586-1.117,13.533,4.25,18.661
											c19.466,18.626,37.567,39.212,55.076,59.123c19.142,21.77,38.93,44.285,60.651,64.399c0.77,0.726,1.618,1.376,2.569,2.006
											c3.227,4.315,7.751,6.773,12.474,6.773c3.359,0,6.649-1.198,9.785-3.564c60.715-45.809,114.879-97.518,155.29-137.445
											c11.856-11.726,23.77-23.436,35.692-35.146c41.757-41.032,84.935-83.464,125.782-126.53c2.234-2.349,3.752-5.073,4.514-8.094
											c3.575-5.545,3.407-12.056-0.492-17.941C452.772,84.295,440.468,64.359,429.281,44.605z M429.103,114.131
											c-30.087,31.392-61.616,62.472-92.114,92.549c-16.103,15.868-32.194,31.739-48.145,47.705
											c-45.552,45.59-95.318,93.673-150.745,136.77c-18.121-17.701-35.15-37.013-51.633-55.705c-12.86-14.584-26.131-29.625-39.9-43.894
											c12.438-6.784,25.06-14.178,38.433-22.501l45.125,54.781c4.228,5.144,8.948,6.221,12.162,6.221c4.108,0,8.221-1.737,11.626-4.885
											c1.206-0.686,2.288-1.452,3.288-2.326c88.613-77.637,173.7-160.949,252.53-239.566C415.433,92.75,421.801,102.891,429.103,114.131
											z"
										/>
								</svg>
								<span className="text-xl">{feature}</span>
							</div>
						))}
					</div>
				</div>
				<div className="w-full flex flex-row justify-center mt-8 px-4">
						<button
							className="border-4 p-2 w-full md:w-auto border-black dark:border-zinc-100 bg-transparent focus:outline-none group hover:bg-black dark:hover:bg-zinc-100"
							type="button"
							onClick={() => setModal(true)}
						>
							<div
								className={`
									font-extrabold text-center w-full text-xl md:text-4xl py-2 px-3 bg-black dark:bg-transparent text-white
									dark:text-zinc-100 group-hover:bg-white dark:group-hover:bg-transparent group-hover:text-black
									dark:group-hover:text-zinc-100
								`}
							>
								Join Bedu List &rarr;
						</div>
					</button>
				</div>
			</div>

			<div className="my-10" />

			<Footer />
		</div>
	)
}