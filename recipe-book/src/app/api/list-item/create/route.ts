import { handleApi } from "@/lib/api";
import { createListItem } from "@/repositories/listItemRepository";
import { ListItem } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * リストアイテム作成 (/api/list-item/create)
 * 
 * 単体作成: { data: リストアイテム }
 * 
 * 複数作成: { datalist: { data: リストアイテム }[] }
 * 
 * @param req リクエスト
 * @returns レスポンス
 */
export async function POST(req: NextRequest) {
    return handleApi(async () => {
        const body = await req.json();

        // 複数作成
        if ('datalist' in body) {
            const { datalist }: { datalist: { data: ListItem }[] } = body;
            const createdListItems = await Promise.all(
                datalist.map(({ data }) => createListItem(data))
            );
            return NextResponse.json(createdListItems, { status: 200 });
        }

        // 単体作成
        const { data } = body;
        const createdListItem = await createListItem(data);
        return NextResponse.json(createdListItem, { status: 200 });
    })
}