export function getRamdomItemFromArray<T>(itemLists: Array<T>): T | null {
    return itemLists[Math.floor(Math.random() * itemLists.length)] ?? null;
}