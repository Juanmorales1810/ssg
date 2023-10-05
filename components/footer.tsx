"use client";
import React from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import { Input } from "@nextui-org/input";
import { MailFilledIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
export default function Footer() {
    const [value, setValue] = React.useState("");

    const validateEmail = (value: string) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = React.useMemo(() => {
        if (value === "") return undefined;

        return validateEmail(value) ? "valid" : "invalid";
    }, [value]);

    return (
        <footer className="flex flex-col items-center justify-center w-full h-96 pt-10">
            <div className="flex flex-col justify-around items-center w-full gap-10 md:flex-row md:gap-52">
                <div className="flex flex-row gap-2 items-center justify-center md:flex-col md:items-start">
                    <div className="flex flex-row gap-1">
                        <Logo />
                        <p className="font-bold mt-1 drop-shadow-md bg-gradient-to-r from-violet-600 via-purple-400 to-purple-800 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-pink-300 dark:via-purple-400 dark:to-red-200 dark:bg-clip-text dark:text-transparent">
                            SSG
                        </p>
                    </div>
                    {siteConfig.navItems.map((item) => (
                        <p
                            className="mb-1 text-black dark:text-white"
                            key={item.href}
                        >
                            <a href={item.href}>{item.label}</a>
                        </p>
                    ))}
                </div>
                <form className="flex flex-col gap-2 w-96 items-end">
                    <Input
                        value={value}
                        isRequired
                        type="email"
                        label="Email"
                        validationState="invalid"
                        placeholder="you@example.com"
                        labelPlacement="inside"
                        color={
                            validationState === "invalid" ? "danger" : "default"
                        }
                        errorMessage={
                            validationState === "invalid" &&
                            "Please enter a valid email"
                        }
                        validationState={validationState}
                        onValueChange={setValue}
                        startContent={
                            <MailFilledIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Input
                        isRequired
                        description=""
                        type="Text"
                        label="Name"
                        placeholder="Your name"
                        labelPlacement="inside"
                        // startContent={
                        //     <MailFilledIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        // }
                    />
                    <Button
                        type="submit"
                        className="w-24"
                        color="secondary"
                        variant="shadow"
                        size="md"
                    >
                        Contact
                    </Button>
                </form>
            </div>
            <p className="text-sm text-center text-black dark:text-white pt-5">
                &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
        </footer>
    );
}
