import { prisma } from "@/lib/prisma";

/**
 * すべてのリストカテゴリーを取得
 * 
 * @returns リストカテゴリーリスト
 */
export async function getAllListCategories() {
    return await prisma.listCategory.findMany();
}