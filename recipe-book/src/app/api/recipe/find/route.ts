import { API_HEADERS, getRequestParams, handleApi } from "@/lib/api";
import { ERROR_MESSAGES, formatMessage } from "@/lib/constants/messages";
import { recipeRepository } from "@/lib/repositories/recipeRepository";
import { NextResponse } from "next/server";

/**
 * レシピ取得 (/api/recipe/find)
 * 
 * { all: 全件取得フラグ }
 * { id: ID }
 * 
 * @param req リクエスト
 * @returns レスポンス
 */
export async function GET(req: Request) {
    return handleApi(async () => {
        const { searchParams } = await getRequestParams(req, {
            requiredAnyParams: ['all', 'id']
        });

        const id = searchParams.get('id');
        if (id) {
            const recipe = await recipeRepository.findRecipeDetail(Number(id));

            if (!recipe) {
                return NextResponse.json(
                    { message: formatMessage(ERROR_MESSAGES.NOT_FOUND, 'レシピ') },
                    { status: 404 }
                );
            } else {
                return NextResponse.json(recipe, {
                    status: 200,
                    headers: API_HEADERS
                });
            }
        }

        const recipes = await recipeRepository.findAllRecipeSummaries();
        return NextResponse.json(recipes, {
            status: 200,
            headers: API_HEADERS
        });
    })
}