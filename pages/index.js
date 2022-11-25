import Footer from "@/components/shared/footer";
import { useState } from "react";
import Modal from "@/components/shared/modal";
import RegisterInterest from "@/components/shared/register-interest";
import { useRouter } from "next/router";
import Hero from "@/components/home/hero";
import TrustedBy from "@/components/home/trusted-by";
import HowItWorks from "@/components/home/how-it-works";
import Examples from "@/components/home/examples";
import UseCases from "@/components/home/use-cases";
import UsefulFor from "@/components/home/useful-for";
import BeforeUs from "@/components/home/before-us";
import { FREE_FEATURES, PAID_FEATURES } from "@/constants/features";
import Pricing from "@/components/home/pricing";

export default function Home() {
	const [showModal, setModal] = useState(false);
	const router = useRouter();

	return (
		<div className="w-full flex flex-col bg-white dark:bg-zinc-900 dark:text-zinc-100">
			<Hero />

			<TrustedBy />

			<HowItWorks />

			<Examples />

			<UseCases />

			<BeforeUs />

			<UsefulFor />

			<Pricing />

			<div className="my-10" />

			<Footer />
		</div>
	)
}