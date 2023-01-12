import InstagramPost from "@/components/shared/instagram-post";

export default function BeforeUs() {
    return (
        <section className="w-full mt-32">
            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-7/12 flex flex-col">
                    <p className="text-4xl font-bold font-poppins mb-10 leading-[3.5rem]">
                        The best brands and franchises use high-quality, professionally shot photos to
                        connect with their customers. Camera roll snaps limit the online success for your business.
                    </p>
                </div>
                <div className="relative w-full md:w-5/12 flex flex-col">
                    <p className="font-bold uppercase text-xs mb-2 hidden md:block">Before</p>
                    <InstagramPost
                        imgUrl="/assets/before.jpg"
                        comments={0}
                        likes="6"
                    />
                </div>
            </div>
        </section>
    )
}