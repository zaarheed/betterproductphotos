const cases = [
    {
        id: "dark-kitchen",
        label: "Dark Kitchens",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                <line x1="6" y1="17" x2="18" y2="17" />
            </svg>
        )
    },
    {
        id: "uber-eats",
        label: "UberEats",
        icon: (
            <img src="/assets/uber.svg" />
        )
    },
    {
        id: "leaflets",
        label: "Leaflets",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
            </svg>
        )
    },
    {
        id: "cars",
        label: "Cars",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
            </svg>
        )
    },
    {
        id: "shopify",
        label: "Shopify",
        icon: (
            <img src="/assets/shopify-bag.png" className="w-8 h-8 invert grayscale" />
        )
    },
    {
        id: "deliveroo",
        label: "Deliveroo",
        icon: (
            <img src="/assets/deliveroo.svg" />
        )
    },
    {
        id: "restaurants",
        label: "Restaurants",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
        )
    },
    {
        id: "Instagram content",
        label: "Instagram",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        )
    },
    {
        id: "billboard-ads",
        label: "Billboard Ads",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 21h10" />
                <rect x="2" y="3" width="20" height="14" rx="2" />
            </svg>
        )
    },
    {
        id: "just-eat",
        label: "Just Eat",
        icon: (
            <img src="/assets/just-eat.svg" />
        )
    }
]

export default function UseCases() {
    return (
        <section className="w-full my-32">
            <div className="w-full max-w-6xl mx-auto px-4 py-4 flex flex-row items-center">
                <div className="w-full grid grid-cols-3 lg:grid-cols-7 gap-8 w-full">
                    {cases.map(useCase => (
                        <div className="border-2 dark:border-zinc-100 rounded-lg p-2 w-full aspect-square flex flex-col items-center text-center text-xs md:text-sm justify-center">
                            {useCase.icon}
                            {useCase.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}