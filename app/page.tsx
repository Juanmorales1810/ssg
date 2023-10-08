"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon, WhatsAppIcon } from "@/components/icons";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { list } from "@/config/list-db";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center lg:max-w-4xl">
                <h1 className="text-7xl font-bold text-black dark:text-white lg:text-8xl animate-fade-down animate-once animate-delay-[100ms] animate-ease-in-out animate-normal">
                    Somos{" "}
                    <b className="drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent">
                        SSG Store
                    </b>
                </h1>
                <br />
                <h1 className="text-4xl font-bold text-black dark:text-white animate-fade-down animate-once animate-delay-[200ms] animate-ease-in-out animate-normal">
                    Tu mundo de aventuras, en nuestras manos.
                </h1>
                <h2 className="text-lg font-light mt-4 text-black dark:text-white animate-fade-down animate-once animate-delay-[300ms] animate-ease-in-out animate-normal">
                    Moderno, bonito y barato.
                </h2>
            </div>

            <div className="flex gap-3 animate-fade-down animate-once animate-delay-[400ms] animate-ease-in-out animate-normal">
                <Link
                    isExternal
                    as={NextLink}
                    href={siteConfig.links.docs}
                    className={buttonStyles({
                        color: "secondary",
                        radius: "full",
                        variant: "shadow",
                    })}
                >
                    <WhatsAppIcon />
                    WhatsApp
                </Link>
                <Link
                    isExternal
                    as={NextLink}
                    className={buttonStyles({
                        color: "secondary",
                        variant: "shadow",
                        radius: "full",
                    })}
                    href={siteConfig.links.github}
                >
                    <GithubIcon size={20} />
                    GitHub
                </Link>
            </div>

            <div className="mt-8 animate-fade-down animate-once animate-delay-[400ms] animate-ease-in-out animate-normal">
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6">
                    {list.map((item, index) => (
                        <Card shadow="lg" key={index}>
                            <CardBody className="overflow-visible p-0  bg-purple-400 dark:bg-purple-900 ">
                                <Image
                                    isBlurred
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[180px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between items-end bg-purple-400 dark:bg-purple-900">
                                <b>{item.title}</b>
                                <p className="text-black dark:text-white">
                                    {item.price}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
