export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "SSG",
    description:
        "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Inicio",
            href: "/",
        },
        {
            label: "Precios",
            href: "/pricing",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Nosotros",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Inicio",
            href: "/",
        },
        {
            label: "Precios",
            href: "/pricing",
        },
        {
            label: "Blog",
            href: "/blog",
        },
        {
            label: "Nosotros",
            href: "/about",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",

        docs: "https://api.whatsapp.com/send?phone=542646629632&text=Quiero%20informaci%C3%B3n%20sobre%20el%20producto!!%20%F0%9F%A5%B3",

        sponsor: "https://patreon.com/jrgarciadev",
    },
};
