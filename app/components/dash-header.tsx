type Props = {
    title: string
};

export default function DashHeader({ title } : Props) {
    return (
        <section className="flex justify-between">
            <h1 className="text-2xl font-extrabold md:text-3xl">{title}</h1>
            <button className="hidden md:block">Logout</button>
        </section>
    );
}