import { prisma } from "@/lib/prisma";
import { ListItem } from "@prisma/client";

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

export async function updateListItem(id: number, data: ListItem) {
    return await prisma.listItem.update({
        where: { id },
        data
    });
}

export async function deleteListItem(id: number) {
    return await prisma.listItem.delete({ where: { id } });
}

export async function deleteAllListItems(ids: number[]) {
    return await prisma.listItem.deleteMany({ where: { id: { in: ids } } });
}