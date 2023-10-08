import Cardb from "@/components/cardb";
export default function BlogPage() {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1 className="text-7xl pb-6 font-semibold drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent animate-fade-down animate-once animate-delay-[100ms] animate-ease-in-out animate-normal">
                Blog
            </h1>
            <div className=" pt-7 flex flex-wrap justify-center gap-5 items-center w-auto  sm:w-[700px]  lg:w-[900px] animate-fade-down animate-once animate-delay-[300ms] animate-ease-in-out animate-normal">
                <Cardb />
            </div>
        </section>
    );
}
