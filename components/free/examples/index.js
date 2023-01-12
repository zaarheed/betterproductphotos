import { SUBSCRIPTION_LINK } from "@/constants/config";
import { EXAMPLES } from "@/constants/examples";
import { PROJECT_NAME } from "@/constants/strings";
import classNames from "classnames";
import { useState } from "react"

const sets = EXAMPLES;

export default function Examples() {
    const [selectedExample, setExample] = useState("1");

    return (
        <section className="w-full my-32">
            <div className="w-full max-w-6xl mx-auto flex flex-col">
                <p className="text-4xl font-bold font-poppins mb-2">
                    How others are using {PROJECT_NAME}
                </p>
                <div className="w-full flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-start">
                    <div className="w-full md:w-5/12 flex flex-col">
                        <p className="mb-2 dark:text-zinc-200 text-black">
                            Generate hundreds of high-quality product photos from just one camera roll
                            upload. See examples we've generated for customers below.
                        </p>
                        <div className="w-full flex flex-col space-y-4 mt-8">
                            {sets.map(set => (
                                <button
                                    key={set.id}
                                    className={classNames(
                                        "w-full flex flex-row space-x-4 items-center border-2 rounded-lg p-2",
                                        "duration-200 cursor-pointer appearance-none",
                                        selectedExample === set.id ? "border-black dark:border-zinc-100" : "border-transparent",
                                        selectedExample === set.id ? null : "hover:bg-gray-200 dark:hover:bg-zinc-800"
                                    )}
                                    type="button"
                                    onClick={() => setExample(set.id)}
                                >
                                    <figure className="w-32 aspect-square overflow-hidden rounded-lg">
                                        <img src={set.logoImgUrl} className="object-cover w-full h-full invert saturate-0" />
                                    </figure>
                                    <div className="w-full flex flex-col">
                                        <p className="text-black dark:text-zinc-200 font-bold text-xl font-poppins text-left">{set.title}</p>
                                        <p className="text-black dark:text-zinc-300 font-light text-sm text-left">{set.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 pt-12 flex flex-col space-y-4">
                        <div className="relative w-full border-4 text-white dark:text-zinc-900 bg-white dark:bg-zinc-100 border-black dark:border-zinc-100 pt-8 p-4 flex flex-col items-center">
                            <div className="absolute -top-8 left-6 border-4 text-lg border-black dark:border-zinc-900 text-black dark:text-zinc-900 py-2 px-3 uppercase bg-white dark:bg-zinc-100 font-black">
                                Results
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 dark:bg-zinc-100 pt-4">
                                {sets[+selectedExample - 1].results.map((image, index) => (
                                    <figure className="w-full aspect-square overflow-hidden" key={index}>
                                        <img src={image} className="w-full h-full object-cover" />
                                    </figure>
                                ))}
                            </div>
                        </div>
                        <a
                            className={`
                                py-2 px-3 flex flex-row space-x-1
                                font-extrabold text-center w-full text-3xl md:text-4xl bg-black dark:bg-zinc-100 text-white
                                dark:text-zinc-900 justify-center uppercase font-poppins items-center
                            `}
                            href={SUBSCRIPTION_LINK}
                        >
                            
                            <span>Upgrade</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-yellow-500 inline-block">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}