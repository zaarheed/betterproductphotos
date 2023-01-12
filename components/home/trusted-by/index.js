import classNames from "classnames";

const customers = [
    {
        label: "Afrikana",
        imgUrl: "/assets/customer-logos/afrikana.png"
    },
    {
        label: "Malik Butchers",
        imgUrl: "/assets/customer-logos/malik-butchers.png"
    },
    {
        label: "Fruit & Ice",
        imgUrl: "/assets/customer-logos/fruit-and-ice.png"
    },
    {
        label: "Birria Taco",
        imgUrl: "/assets/customer-logos/birria-taco.png"
    },
    {
        label: "Ghost Burgers",
        imgUrl: "/assets/customer-logos/ghost-burgers.png"
    },
    {
        label: "The Dutch Fishmen",
        imgUrl: "/assets/customer-logos/the-dutch-fishmen.png"
    }
]

export default function TrustedBy() {
    return (
        <section className="w-full">
            <div className="w-full max-w-6xl mx-auto px-4 py-4 flex flex-row items-center">
                <div className="w-full flex flex-col md:flex-row items-center bg-black dark:bg-transparent rounded-lg py-4">
                    <div className="w-full md:w-4/12 text-white dark:text-zinc-100 font-extralight text-sm text-center mb-2 md:mb-0">
                        Trusted by over 200 businesses including
                    </div>
                    <div className="w-full md:w-8/12 grid grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4 lg:gap-x-3 w-full">
                        {customers.map((customer, index) => (
                            <figure
                                key={`${index}`}
                                className={classNames(
                                    "overflow-hidden flex flex-col justify-center",
                                    index > 5 ? "hidden lg:block" : null
                                )}
                            >
                                <img src={customer.imgUrl} alt={customer.label} className="object-contain grayscale" />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}