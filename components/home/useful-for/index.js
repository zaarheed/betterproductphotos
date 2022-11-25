import InstagramPost from "@/components/shared/instagram-post";

export default function UsefulFor() {
    return (
        <section className="w-full mt-32 mb-64">
            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-7/12 flex flex-col">
                    <p className="text-4xl font-black font-poppins mb-10 leading-[3.5rem]">
                        Use your photos to get <img src="https://ucarecdn.com/3e147e46-b844-4bc5-8684-dd359b846ae0/like_comments.svg" className="inline-block h-12 mx-2" />
                        on Instagram, viral on TikTok <img src="/assets/tiktok.png" className="inline-block h-8 -mt-2 invert" />,
                        sell more on <img src="/assets/shopify-bag.png" className="ml-2 -mt-2 w-8 h-8 inline-block" />hopify and make your
                        brand look <span className="text-yellow-500">professional {" "}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-2 w-12 h-12 inline-block">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg></span>

                    </p>
                    <p className="text-xl font-medium">
                        All with one monthly subscription.
                    </p>
                    <p className="dark:text-zinc-300 text-sm font-light">
                        No commitment. Cancel any time.
                    </p>
                </div>
                <div className="relative w-full md:w-5/12 flex flex-col py-20 md:py-10">
                    <p className="font-bold uppercase text-xs mb-6 hidden md:block">After</p>
                    <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 -rotate-3">
                            <InstagramPost
                                imgUrl="/assets/examples/3/result-4.png"
                                comments={90}
                                likes="1.2K"
                            />
                        </div>
                        <div className="absolute top-0 left-0">
                            <InstagramPost
                                imgUrl="/assets/examples/4/result-3.png"
                                comments={90}
                                likes="1.2K"
                            />
                        </div>
                        <div className="absolute top-0 left-0 rotate-3">
                            <InstagramPost
                                imgUrl="/assets/examples/2/result-2.png"
                                comments={90}
                                likes="1.2K"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}