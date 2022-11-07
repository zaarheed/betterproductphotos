import classNames from "classnames";
import { useTool } from "./tool-context"

export default function StepThree() {
    const { tool } = useTool();
	const { resultImages = [] } = tool;

    return (
		<div className="w-full max-w-4xl mx-auto flex flex-col">
            <div className="w-96 mx-auto h-1 bg-zinc-300" />

            <div className="my-4 w-full">
                <p className="text-2xl font-bold">
                    Step 3: Save your results
                </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-8">
                {resultImages.map(image => (
					<a
						className={classNames(
							"rounded-lg overflow-hidden group w-full aspect-square pointer-cursor border-4 border-transparent",
						)}
						key={image.shortcode}
                        href={image.remote_url}
                        target="_blank"
					>
						<img
							src={image.copy_url}
							className={classNames(
								"object-cover w-full duration-200",
							)}
						/>
					</a>
				))}
            </div>

            <div className="my-4 w-full flex flex-row justify-between">
                <button
                    className={`
                        bg-zinc-100 text-lg font-medium text-zinc-900 py-4 px-8
                    `}
                    type="button"
                >
                    Next Step
                </button>
            </div>
        </div>
	)
}