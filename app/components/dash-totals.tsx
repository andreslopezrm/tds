type Props = {
    totalCategories: number;
    totalTips: number;
    totalStats: number;
}

export default function DashTotals({ totalCategories, totalTips, totalStats }: Props) {
    return (
        <section className="md:flex md:gap-5">
            <div className="text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1">
                <h4 className="font-semibold text-lg mb-3">Total Categories</h4>
                <p className="font-extrabold text-3xl">{totalCategories}</p>
            </div>

            <div className="text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1">
                <h4 className="font-semibold text-lg mb-3">Total Tips</h4>
                <p className="font-extrabold text-3xl">{totalTips}</p>
            </div>

            <div className="text-gray-900 border-2 border-gray-800 rounded-lg px-5 py-2.5 text-center mb-3 md:flex-1">
                <h4 className="font-semibold text-lg mb-3">Total Request Today</h4>
                <p className="font-extrabold text-3xl">{totalStats}</p>
            </div>
        </section>
    );
}