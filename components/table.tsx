"use client";
import { list } from "../app/page";
import Window from "@/components/modal";

export default function Table() {
    return (
        <>
            <table className="table-md backdrop-blur-xl bg-white/30 rounded-md">
                {/* head */}
                <thead className="">
                    <tr className=" text-black dark:text-white">
                        <th>Game</th>
                        <th className=" hidden sm:block">Descrption</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td className=" text-black dark:text-white">
                                <div className="flex items-center space-x-3">
                                    <div className="hidden sm:block avatar">
                                        <div className="hidden sm:block mask mask-squircle w-12 h-12">
                                            <img
                                                className=" hidden sm:block"
                                                src={item.img}
                                                alt={item.title}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className=" text-black dark:text-white hidden sm:block ">
                                <p className="overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] xl:[-webkit-line-clamp:3]">
                                    {item.description}
                                </p>
                            </td>
                            <td className=" text-black dark:text-white">
                                <p>{item.price}</p>
                            </td>
                            <th>
                                <Window content={item} />
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
