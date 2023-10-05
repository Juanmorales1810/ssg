"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, WhatsAppIcon } from "@/components/icons";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
export const list = [
    {
        title: "Empowerment Quest",
        img: "/images/games/1.webp",
        price: "$49.99",
        description:
            "Embark on a journey of self-discovery and empowerment in this immersive RPG.",
    },
    {
        title: "Horizon zero dawn",
        img: "/images/games/2.webp",
        price: "$39.99",
        description:
            "Horizon Zero Dawn es un videojuego de acción, aventura y de mundo abierto desarrollado por Guerrilla Games y distribuido por Sony Interactive Entertainment para PlayStation 4 y Microsoft Windows.",
    },
    {
        title: "Tomb Raider",
        img: "/images/games/3.webp",
        price: "$29.99",
        description:
            "Tomb Raider es un videojuego de acción-aventura, de mundo abierto desarrollado por Crystal Dynamics y distribuido por Square Enix. Es el décimo título de la serie Tomb Raider y el quinto título desarrollado por Crystal Dynamics.",
    },
    {
        title: "League of Legends",
        img: "/images/games/4.webp",
        price: "$59.99",
        description:
            "League of Legends, es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de Riot buscaron desarrollar un juego independiente del mismo género.",
    },
    {
        title: "The Last of Us Part II",
        img: "/images/games/5.webp",
        price: "$24.99",
        description:
            "The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.",
    },
    {
        title: "Overwatch 2",
        img: "/images/games/6.webp",
        price: "$34.99",
        description:
            "Overwatch 2 es un videojuego de disparos en primera persona. Fue desarrollado y publicado por Blizzard Entertainment. Es una secuela del hero shooter de 2016 Overwatch.",
    },
    {
        title: "Mirror's Edge",
        img: "/images/games/7.webp",
        price: "$44.99",
        description:
            "Mirror's Edge es un videojuego de acción-aventura en primera persona desarrollado por EA Digital Illusions CE (DICE). El juego fue lanzado para PlayStation 3 y Xbox 360 en noviembre del 2008, y para Windows en enero del 2009.",
    },
    {
        title: "Fortnite",
        img: "/images/games/8.webp",
        price: "$29.99",
        description:
            "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los premios Spike Video Game Awards en 2011.",
    },
    {
        title: "Super Mario Maker 2",
        img: "/images/games/9.webp",
        price: "$39.99",
        description:
            "Super Mario Maker 2 es un videojuego de plataformas y de creación de niveles, desarrollado y publicado por Nintendo para Nintendo Switch. Es la secuela de Super Mario Maker y salió a la venta el 28 de junio de 2019 en todo el mundo.",
    },
    {
        title: "Crash Bandicoot",
        img: "/images/games/10.webp",
        price: "$34.99",
        description:
            "Crash Bandicoot es el nombre de una serie de videojuegos protagonizado por el personaje del mismo nombre. Fue creada en 1996 por Naughty Dog, quien desarrolló los primeros cuatro títulos, bajo la distribución de Universal Interactive Studios.",
    },
    {
        title: "Minecraft",
        img: "/images/games/11.webp",
        price: "$49.99",
        description:
            "Minecraft es un videojuego de construcción de tipo «mundo abierto» o en inglés sandbox creado originalmente por el sueco Markus Persson, que creo posteriormente Mojang Studios.",
    },
    {
        title: "Cyberpunk 2077",
        img: "/images/games/12.webp",
        price: "$19.99",
        description:
            "Cyberpunk 2077 es un videojuego perteneciente al género rol de acción y disparos en primera persona desarrollado y publicado por CD Projekt, que se lanzó para Microsoft Windows, PlayStation 4 y Xbox One el 10 de diciembre de 2020, y posteriormente en PlayStation 5, Xbox Series X|S y Google Stadia.",
    },
    {
        title: "FIFA 23",
        img: "/images/games/13.webp",
        price: "$44.99",
        description:
            "FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA.",
    },
    {
        title: "Sonic Frontiers",
        img: "/images/games/14.webp",
        price: "$29.99",
        description:
            "Sonic Frontiers es un videojuego de plataformas de 2022 desarrollado por Sonic Team y publicado por Sega. Como Sonic, el jugador explora las islas Starfall para recolectar las Chaos Emeralds, después de que Sonic y sus amigos se separan al caer a través de un agujero de gusano.",
    },
    {
        title: "Life Is Strange",
        img: "/images/games/15.webp",
        price: "$39.99",
        description:
            "Life Is Strange es una serie de juegos narrativos de aventuras publicados por External Studios de Square Enix. Creada por Dontnod Entertainment, la serie debutó con la primera entrega homónima, que se lanzó en cinco episodios a lo largo de 2015.",
    },
    {
        title: "Control",
        img: "/images/games/16.webp",
        price: "$34.99",
        description:
            "Control es un videojuego de acción-aventura y disparos en tercera persona desarrollado por Remedy Entertainment y distribuido por 505 Games. Fue lanzado el 27 de agosto de 2019 en las plataformas Stadia, Microsoft Windows, PlayStation 4, Xbox One y Nintendo Switch.",
    },
];
export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center lg:max-w-4xl">
                <h1 className="text-7xl font-bold text-black dark:text-white lg:text-8xl">
                    Somos{" "}
                    <b className="drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent">
                        SSG Store
                    </b>
                </h1>
                <br />
                <h1 className={title()}>
                    Tu mundo de aventuras, en nuestras manos.
                </h1>
                <h2 className={subtitle({ class: "mt-4" })}>
                    Moderno, bonito y barato.
                </h2>
            </div>

            <div className="flex gap-3">
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

            <div className="mt-8">
                <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6">
                    {list.map((item, index) => (
                        <Card shadow="lg" key={index}>
                            <CardBody className="overflow-visible p-0  bg-purple-400 dark:bg-purple-900">
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
