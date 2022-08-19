import { getTotalCategoriesByUser } from "./category.server";
import { getStatsToday } from "./stats.server";
import { getAllTipsByUserPaging, getTotalTipsByUser, Tip } from "./tip.server";

export type DashboardTotals = {
    totalCategories: number;
    totalTips: number;
    totalStats: number;
    lastTips: Tip[];
}

export async function getTotalDashboard(userId: string): Promise<DashboardTotals> {
    const [
        totalCategories, 
        totalTips, 
        totalStats, 
        lastTips
    ] = await Promise.all([
        getTotalCategoriesByUser(userId),
        getTotalTipsByUser(userId),
        getStatsToday(userId),
        getAllTipsByUserPaging({ userId, offset: 0, perPage: 4 })
    ]);
    return { totalCategories, totalTips, totalStats, lastTips };
}