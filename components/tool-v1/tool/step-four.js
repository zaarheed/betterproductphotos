import classNames from "classnames";
import { useEffect } from "react";
import { useTool } from "./tool-context"
import confetti from "canvas-confetti";
import { PAID_FEATURES } from "@/constants/features";
import Examples from "@/components/free/examples";
import { SUBSCRIPTION_LINK } from "@/constants/config";

const bullets = [
    "Your original image is highlighted below",
    "Free images are generated in low-resolution - upgrade to Pro for HD",
    "You are free to save and use these images as you wish",
    "A copy of these images will be sent to your email",
];

export default function StepFour() {
    const { tool } = useTool();
    const { resultImages = [] } = tool;

    useEffect(() => {
        if (!window) return;

        window.scrollTo({ top: 0, behavior: "smooth" });
        confetti();
    }, []);

    return (
        <div className="w-full flex flex-col">

            <div className="my-4 w-full bg-black dark:bg-zinc-800 rounded-lg p-4 text-white dark:text-zinc-700">
                <ul className="text-lg font-poppins font-medium">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="w-full flex flex-row items-start space-x-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mt-1 shrink-0">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-0">
                <a
                    className={classNames(
                        "overflow-hidden group w-full aspect-square pointer-cursor bg-yellow-500 p-3",
                    )}
                    href={tool.imgUrl}
                    target="_blank"
                >
                    <div className="w-full h-full overflow-hidden">
                        <img
                            src={tool.imgUrl}
                            className={classNames(
                                "object-cover w-full duration-200",
                            )}
                        />
                    </div>
                </a>
                {resultImages.map(image => (
                    <a
                        className={classNames(
                            "overflow-hidden group w-full aspect-square pointer-cursor",
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

            <div className="w-full max-w-6xl mx-auto flex flex-col space-y-20 md:flex-row md:space-y-0 md:space-x-12 items-start my-32">
                <div className="relative w-full md:w-5/12 text-black dark:text-zinc-100 flex flex-col items-left">
                    <p className="text-4xl font-bold font-poppins mb-2">
                        Upgrade to pro for 100x more photos
                    </p>
                    <p className="mb-2 dark:text-zinc-200 text-black">
                        Choose themes, styles, generate 1000 images and more with a pro subscription. No commitment and cancel any time.
                    </p>
                </div>
                <div className="w-full md:w-7/12 flex flex-col space-y-4">
                    <div className="relative w-full border-4 text-white dark:text-zinc-900 bg-black dark:bg-zinc-100 border-black dark:border-zinc-100 pt-8 p-4 flex flex-col items-center">
                        <div className="absolute -top-8 right-6 border-4 text-lg border-white dark:border-zinc-900 text-white dark:text-zinc-900 py-2 px-3 uppercase bg-black dark:bg-zinc-100 font-black">
                            Introductory offer
                        </div>
                        <p className="font-light text-xl w-full text-left tracking-wide">£29.99/mo</p>
                        <p className="font-poppins font-black text-3xl md:text-4xl uppercase w-full text-left mb-8">
                            Never pay for a photographer again.
                        </p>
                        {PAID_FEATURES.map((feature, index) => (
                            <div className="w-full flex flex-row items-start mb-2 font-light" key={index}>
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
                    <a
                        className={`
                            py-2 px-3 flex flex-row space-x-1
                            font-extrabold text-center w-full text-3xl md:text-4xl bg-black dark:bg-zinc-100 text-white
                            dark:text-zinc-900 justify-center uppercase font-poppins items-center
                        `}
                        href={SUBSCRIPTION_LINK}
                        target="_blank"
                    >
                        
                        <span>Upgrade</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-yellow-500 inline-block">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <Examples />
        </div>
    )
}