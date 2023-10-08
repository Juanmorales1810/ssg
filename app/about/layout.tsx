import Lottie from "@/components/lottie";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col h-[calc(auto-5rem)] w-full items-center justify-center -z-50">
            {children}
            <div className="flex flex-col-reverse w-full justify-around items-center gap-4 px-6 py-8 md:py-10 lg:flex-row">
                <div>
                    <Lottie />
                </div>
                <div className="">
                    <h2 className="text-7xl xl:text-8xl pb-6 text-center font-semibold drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent sm:font-bold lg:text-left">
                        Atención 24/7
                    </h2>
                    <p className="text-black text-xl pb-3 text-center lg:text-left dark:text-white">
                        Para todo el país
                    </p>
                </div>
            </div>
        </section>
    );
}
