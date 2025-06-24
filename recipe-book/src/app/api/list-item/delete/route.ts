import { handleApi } from "@/lib/api";
import { deleteAllListItems, deleteListItem } from "@/repositories/listItemRepository";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    return handleApi(async () => {
        const body = await req.json();

        // 複数削除
        if ('ids' in body) {
            const ids: number[] = body.ids;
            const deletedListItems = await deleteAllListItems(ids);
            return NextResponse.json(deletedListItems, { status: 200 });
        }

        // 単体削除
        const { id } = body;
        const deletedListItem = await deleteListItem(id);
        return NextResponse.json(deletedListItem, { status: 200 });
    })
}