import { API_HEADERS, getRequestParams, handleApi } from "@/lib/api";
import { ERROR_MESSAGES, formatMessage } from "@/lib/constants/messages";
import { userRepository } from "@/lib/repositories/userRepository";
import { NextResponse } from "next/server";

/**
 * ユーザー取得 (/api/user/find)
 * 
 * { all: 全件取得フラグ } 
 * { id: ID } 
 * { ids: IDリスト}
 * 
 * @param req リクエスト
 * @returns レスポンス
 */
export async function GET(req: Request) {
    return handleApi(async () => {
        const { searchParams } = await getRequestParams(req, {
            requiredAnyParams: ['all', 'id', 'ids']
        });
        const userId = searchParams.get('id')!;
        const user = await userRepository.findById(userId);

        if (!user) {
            return NextResponse.json(
                { message: formatMessage(ERROR_MESSAGES.NOT_FOUND, 'ユーザー') },
                { status: 404 }
            );
        }

        return NextResponse.json(user, {
            status: 200,
            headers: API_HEADERS
        });
    })
}