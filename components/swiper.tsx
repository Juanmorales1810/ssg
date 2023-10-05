"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { list } from "@/app/page";
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
                className="mySwiper"
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
                                    className="object-cover h-[300px] w-[200px] lg:w-full"
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
