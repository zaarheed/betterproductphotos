import { EXAMPLES } from "@/constants/examples";
import classNames from "classnames";
import { useState } from "react"

const sets = EXAMPLES;

export default function Examples() {
    const [selectedExample, setExample] = useState("1");

    return (
        <section className="w-full my-32">
            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col">
                <p className="text-4xl font-bold font-poppins mb-2">
                    Send one image, get back hundreds
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
                                        <img src={set.coverImgUrl} className="object-cover w-full h-full" />
                                    </figure>
                                    <div className="w-full flex flex-col">
                                        <p className="text-black dark:text-zinc-200 font-bold text-xl font-poppins text-left">{set.title}</p>
                                        <p className="text-black dark:text-zinc-300 font-light text-sm text-left">{set.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 pt-12">
                        <div className="relative w-full border-4 text-white dark:text-zinc-900 bg-white dark:bg-zinc-100 border-black dark:border-zinc-100 pt-8 p-4 flex flex-col items-center">
                            <div className="absolute -top-8 left-6 border-4 text-lg border-black dark:border-zinc-900 text-black dark:text-zinc-900 py-2 px-3 uppercase bg-white dark:bg-zinc-100 font-black">
                                Results
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-1 dark:bg-zinc-100 pt-4">
                                {sets[+selectedExample - 1].results.map((image, index) => (
                                    <figure key={index} className="w-full aspect-square overflow-hidden">
                                        <img src={image} className="w-full h-full object-cover" />
                                    </figure>
                                ))}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}