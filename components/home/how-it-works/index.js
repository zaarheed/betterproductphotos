const videos = [
    {
        id: "1",
        //videoUrl: "https://feedsauce.com/wp-content/themes/133-feedsause-beta/landing-page/assets/1.mp4",
        title: "Select images",
        description: "Select images from your camera roll and send them using WhatsApp",
    },
    {
        id: "2",
        //videoUrl: "https://feedsauce.com/wp-content/themes/133-feedsause-beta/landing-page/assets/2.mp4",
        title: "Grab a coffee",
        description: "You'll need to be quick though! It takes less than a minute to generate your photos",
    },
    {
        id: "3",
        //videoUrl: "https://feedsauce.com/wp-content/themes/133-feedsause-beta/landing-page/assets/3.mp4",
        title: "Share, share, share!",
        description: "Download your photos and post them on social media, use them in promotional material... and anywhere else!",
    },
]

export default function HowItWorks() {
    return (
        <section className="w-full my-32">
            <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-1">
                {videos.map(video => (
                    <div className="w-full flex flex-col" key={video.id}>
                        <video className="w-full aspect-square overflow-hidden bg-gradient-to-bl from-gray-300 to-gray-200 dark:from-zinc-700 dark:to-zinc-800" autoPlay muted loop>
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                        <div className="w-full flex flex-col items-start -mt-6 px-2">
                            <p className="text-white dark:text-zinc-900 font-bold text-2xl bg-black dark:bg-zinc-100 h-10 w-10 rounded-full text-center flex flex-col justify-center border-2 border-white dark:border-zinc-900">
                                {video.id}
                            </p>
                            <p className="text-2xl font-semibold font-poppins my-1">
                                {video.title}
                            </p>
                            <p className="text-black dark:text-zinc-300 text-sm font-light">
                                {video.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}