import { PROJECT_NAME } from "@/constants/strings";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white dark:bg-zinc-900 dark:text-zinc-100">
            <div className="w-full max-w-6xl mx-auto pt-20 pb-4 px-4 text-center md:text-left">
                &copy; {PROJECT_NAME} {new Date().getFullYear()}
            </div>
        </footer>
    )
}