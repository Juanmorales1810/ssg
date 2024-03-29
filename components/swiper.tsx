"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { list } from "@/config/list-db";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/globals.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

export default function Cards() {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}
                className="mySwiper animate-fade-left animate-once animate-delay-[100ms] animate-ease-in-out animate-normal"
            >
                {list.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card shadow="lg" className="w-full h-full">
                            <CardBody className="overflow-visible p-0  bg-purple-400 dark:bg-purple-900">
                                <Image
                                    isBlurred
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="object-cover h-[260px] w-[200px] lg:w-full"
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
