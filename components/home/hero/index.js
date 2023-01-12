import Link from "next/link";

export default function Hero() {
	return (
		<section className="relative w-full from-zinc-800 to-zinc-900 h-screen flex flex-col justify-center overflow-hidden">
			<img src="/assets/hero.png" className="absolute top-0 right-0 hidden dark:block" />
			<img src="/assets/hero-light-2.png" className="absolute -top-14 md:bottom-0 right-0 dark:hidden" />
			<div className="absolute top-0 left-0 w-full h-screen flex flex-col pt-24 md:pt-0 justify-center">
				<div className="w-full max-w-6xl mx-auto py-32 px-4">
					<h1 className="text-4xl md:text-8xl font-black text-left">
						You need better product photos
					</h1>
					<h3 className="font-poppins font-light text-2xl md:text-4xl text-left mt-10">
						Build more than a business: Build a brand.
					</h3>
					<div className="w-full flex flex-row justify-center my-2 md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="12" y1="5" x2="12" y2="19" />
							<polyline points="19 12 12 19 5 12" />
						</svg>
					</div>

					<p className="text-xl md:text-2xl text-left dark:text-zinc-300 font-light max-w-xl">
						Upload snaps from your camera roll and we'll send you back beautiful, high quality
						product photos in minutes
					</p>

					<div className="w-full flex flex-col md:flex-row justify-start mt-8 mb-2 space-y-4 md:space-y-0 md:space-x-4">
						<Link href="/free" passHref>
							<a
								className={`
									font-extrabold text-xl md:text-xl py-2 px-2 bg-black text-white dark:text-zinc-100 dark:bg-transparent 
									hover:bg-white dark:hover:bg-transparent hover:text-black group text-center
									dark:hover:text-zinc-900 border-4 border-black dark:border-zinc-100
								`}
							>
								<div
									className={`
											w-full py-2 px-2 bg-black dark:bg-transparent group-hover:bg-white
											dark:group-hover:bg-zinc-100
										`}
								>
									Try it yourself &rarr;
								</div>
							</a>
						</Link>
						<button
							className={`
									text-xl md:text-xl py-2 px-2 bg-transparent text-black dark:text-zinc-100 dark:bg-transparent 
									group
								`}
							type="button"
						>
							<div
								className={`
										w-full py-2 px-2 bg-transparent group-hover:scale-105 duration-200
									`}
							>
								See examples
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}