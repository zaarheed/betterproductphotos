import { Spinner } from "@/components/shared/loading-spinner";
import { api } from "@/services/api";
import { useEffect } from "react";
import { useTool } from "./tool-context"

export default function StepThree() {
    const { tool, setTool, nextStep } = useTool();

    useEffect(() => {
        handleGenerate();
    }, []);

    const handleGenerate = async () => {
        const shortcode = (new Date()).getTime();
        let response = await api.post("image-generation/generate", {
			posts: [{ copy_url: tool.imgUrl, shortcode: shortcode  }],
            folder: "photosauceai"
		}).catch(error => console.log(error));

		let { images: images_1 } = await response.json();

        
        response = await api.post("image-generation/generate", {
            posts: [{ copy_url: tool.imgUrl, shortcode: shortcode }]
		}).catch(error => console.log(error));
        
        let { images: images_2 } = await response.json();

        let resultImages = [...images_1, ...images_2];

		setTool(_tool => ({ ..._tool, resultImages }));

        nextStep();
    }

    return (
		<div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center my-32">
            <div className="w-32 h-32">
                <Spinner show={true} />
            </div>
            <p className="mt-4 font-bold text-3xl">We're generating your photos...</p>
            <p className="text-sm font-light dark:text-zinc-300">
                It may take up to 30 seconds. Don't leave this page.
            </p>
        </div>
	)
}