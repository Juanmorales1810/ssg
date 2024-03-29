export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "SSG",
    description: "Tu mundo de aventuras, en nuestras manos.",
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
            href: "/blogs",
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
            href: "/blogs",
        },
        {
            label: "Nosotros",
            href: "/about",
        },
    ],
    links: {
        github: "https://github.com/Juanmorales1810/ssg",

        docs: "https://api.whatsapp.com/send?phone=542646629632&text=Buenas%20quiero%20informaci%C3%B3n%20sobre%20el%20negocio!!%20%F0%9F%A5%B3",

        sponsor: "https://mpago.la/16spSjo",
    },
};
