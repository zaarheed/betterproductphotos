import { api } from "@/services/api";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTool } from "./tool-context"

export default function StepTwo() {
    const { tool, setTool, nextStep } = useTool();
	const [importedPosts, setPosts] = useState([]);
	const [selectedPosts, setSelectedPosts] = useState([]);
	
	useEffect(() => {
		if (!tool.inputJson) return;

		setPosts(tool.loadedImages);

	}, [tool.inputJson]);

	const handlePostSelection = (post) => {
		let newSelectedPosts = [...selectedPosts];

		if (!!newSelectedPosts.find(p => p.shortcode === post.shortcode)) {
			newSelectedPosts = newSelectedPosts.filter(p => p.shortcode !== post.shortcode);
		} else {
			if (selectedPosts.length >= 5) return;
			
			newSelectedPosts.push({
				...post
			});
		}

		setSelectedPosts(newSelectedPosts);
	};

	const handleNextStep = async () => {
		const response = await api.post("image-generation/generate", {
			posts: selectedPosts
		}).catch(error => console.log(error));

        console.log(response);

        const { images } = await response.json();

        setTool({ ...tool, resultImages: images });

        nextStep();
	}

    return (
		<div className="w-full max-w-4xl mx-auto flex flex-col">
            <div className="w-96 mx-auto h-1 bg-zinc-300" />

            <div className="my-4 w-full">
                <p className="text-2xl font-bold">
                    Step 2: {selectedPosts.length < 5 ? `Select ${5 - selectedPosts.length} posts` : `Click Next`}
                </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-8">
                {importedPosts.map(post => (
					<figure
						className={classNames(
							"rounded-lg overflow-hidden group w-full aspect-square pointer-cursor border-4",
							!!selectedPosts.find(p => p.shortcode === post.shortcode) ? "border-sky-400" : "border-transparent"
						)}
						key={post.shortcode}
						onClick={() => handlePostSelection(post)}
					>
						<img
							src={post.copy_url}
							className={classNames(
								"object-cover w-full group-hover:scale-125 duration-200",
								!!selectedPosts.find(p => p.shortcode === post.shortcode) ? "saturate-100 scale-125" : "saturate-0"
							)}
						/>
					</figure>
				))}
            </div>

            <div className="my-4 w-full flex flex-row justify-between">
                <button
                    className={`
                        bg-zinc-100 text-lg font-medium text-zinc-900 py-4 px-8
                    `}
                    type="button"
                    onClick={handleNextStep}
                >
                    Next Step
                </button>
            </div>
        </div>
	)
}