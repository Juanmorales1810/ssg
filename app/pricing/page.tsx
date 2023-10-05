import { title } from "@/components/primitives";
import Table from "@/components/table";

export const metadata: any = {
    title: "Pricing",
};

export default function PricingPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-7xl pb-6 font-semibold drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent">
                Pricing
            </h1>
            <div className="overflow-x-auto w-auto  sm:w-[600px]  xl:w-[900px] pt-7">
                <Table />
            </div>
        </div>
    );
}
