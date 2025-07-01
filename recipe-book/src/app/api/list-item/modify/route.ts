import { handleApi } from "@/lib/api";
import { updateListItem } from "@/repositories/listItemRepository";
import { ListItem } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * リストアイテム編集
 * 
 * 単体更新: { id: リストアイテムID, data: リストアイテム }
 * 
 * 複数更新: { datalist: { id: リストアイテムID, data: リストアイテム }[] }
 * 
 * @param req リクエスト 
 * @returns レスポンス
 */
export async function POST(req: NextRequest) {
    return handleApi(async () => {
        const body = await req.json();

        // 複数更新
        if ('datalist' in body) {
            const { datalist }: { datalist: { id: number, data: ListItem }[] } = body;
            const updatedListItems = await Promise.all(
                datalist.map(({ id, data }) => updateListItem(id, data))
            );
            return NextResponse.json(updatedListItems, { status: 200 });
        }

        // 単体更新
        const { id, data } = body;
        const updatedListItem = await updateListItem(id, data);
        return NextResponse.json(updatedListItem, { status: 200 });
    })
}