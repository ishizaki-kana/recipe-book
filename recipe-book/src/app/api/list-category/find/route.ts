import { API_HEADERS, getRequestParams, handleApi } from "@/lib/api";
import { listCategoryRepository } from "@/lib/repositories/listCategoryRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return handleApi(async () => {
        const { searchParams } = await getRequestParams(req, {
            requiredParams: ['all']
        })

        const categories = await listCategoryRepository.findAll();
        return NextResponse.json(categories, {
            status: 200,
            headers: API_HEADERS
        })
    })
}