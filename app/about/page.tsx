import Cards from "@/components/swiper";
export const metadata: any = {
    title: "About",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col h-[calc(100vh-5rem)] w-full justify-around items-center gap-4 px-6 py-8 md:py-10 lg:flex-row">
            <div className="w-96">
                <h1 className=" text-7xl pb-6 font-semibold drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent sm:font-bold">
                    Somos SSG
                </h1>
                <p className="text-black text-lg pb-3 dark:text-white">
                    En nuestra tienda de videojuegos, encontrarás un mundo de
                    emocionantes aventuras y experiencias virtuales que te
                    llevarán a nuevas dimensiones.
                </p>
                <p className="text-black text-sm pb-3 dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore error illum iure voluptatibus cum quaerat porro.
                </p>
            </div>
            <div>
                <Cards></Cards>
            </div>
        </div>
    );
}
