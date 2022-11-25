import Footer from "@/components/shared/footer";
import TrustedBy from "@/components/home/trusted-by";
import Tool from "@/components/tool-v1/tool";

export default function Free() {
	return (
		<div className="w-full flex min-h-screen flex-col bg-white dark:bg-zinc-900 dark:text-zinc-100">

			<section className="w-full max-w-6xl mx-auto px-4">
				<Tool />
			</section>
			
			<TrustedBy />

			<Footer />
		</div>
	);
}