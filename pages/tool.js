import Footer from "@/components/shared/footer";
import ToolV1 from "@/components/tool-v1/tool";

export default function Tool() {

	return (
		<div className="w-full flex flex-col bg-white dark:bg-zinc-900 dark:text-zinc-100">
			<div className="my-10" />
			
			<ToolV1 />

			<div className="my-10" />

			<Footer />
		</div>
	)
}