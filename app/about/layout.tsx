export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col h-[calc(100vh-5rem)] w-full items-center justify-center -z-50">
            {children}
        </section>
    );
}
