import { ListItem } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

/**
 * すべてのリストアイテムを取得
 * 
 * @returns リストアイテムリスト
 */
export async function getAllListItems() {
    return await prisma.listItem.findMany();
}

export async function createListItem(data: ListItem) {
    return await prisma.listItem.create({ data });
}

export async function updateListItem(itemId: number, data: ListItem) {
    return await prisma.listItem.update({
        where: { itemId },
        data
    });
}

export async function deleteListItem(itemId: number) {
    return await prisma.listItem.delete({ where: { itemId } });
}

export async function deleteAllListItems(ids: number[]) {
    return await prisma.listItem.deleteMany({ where: { itemId: { in: ids } } });
}