import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import clsx from "clsx";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    keywords: ["Videogames", "Juegos", "Tienda"],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    creator: "Juan Morales",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        images: ["/images/metadata/image-meta.png"],
        title: siteConfig.name,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: ["/images/metadata/image-meta.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased ",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative flex flex-col h-full bg-gradient-to-br from-violet-200 to-pink-200 dark:bg-gradient-to-br dark:from-purple-700 ">
                        <Navbar />
                        <main className="pt-16 px-2 sm:px-6 lg:px-16 flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
