import { getTotalCategoriesByUser } from "./category.server";
import { getStatsToday } from "./stats.server";
import { getAllTipsByUserPaging, getTotalTipsByUser } from "./tip.server";

export async function getTotalDashboard(userId: string) {
    const [totalCategories, totalTips, totalStats, lastTips] = await Promise.all([
        getTotalCategoriesByUser(userId),
        getTotalTipsByUser(userId),
        getStatsToday(userId),
        getAllTipsByUserPaging({ userId, offset: 0, perPage: 4 })
    ]);
    return { totalCategories, totalTips, totalStats, lastTips };
}