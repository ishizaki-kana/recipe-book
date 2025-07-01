import { prisma } from "@/lib/prisma";

/**
 * すべてのレシピの概要リスト取得
 * 
 * @returns レシピ概要リスト
 */
export async function getAllRecipeSummaries(): Promise<RecipeSummaryType[]> {
    return await prisma.recipe.findMany({
        select: {
            id: true,
            name: true,
            imageUrl: true,
            shelfLife: true,
            calories: true,
            category: {
                select: {
                    id: true,
                    name: true,
                    icon: true,
                    color: true
                }
            }
        }
    });
}

/**
 * レシピの詳細取得
 * 
 * id が一致するレシピが存在しないときは null を返却します。
 * 
 * @returns レシピ詳細
 */
export async function getRecipeDetail(id: number): Promise<RecipeDetailType | null> {
    return await prisma.recipe.findUnique({
        where: {
            id
        },
        include: {
            category: true
        }
    });
}