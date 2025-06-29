import { prisma } from "@/lib/prisma";

export async function getAllRecipes() {
    return await prisma.recipe.findMany({
        include: {
            category: true
        }
    });
}