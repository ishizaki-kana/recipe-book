import { NextResponse } from "next/server";
import { ERROR_MESSAGES } from "./messages";

type HandlerFn = () => Promise<Response>;

/**
 * API共通エラーハンドラー
 * 
 * 非同期のAPIハンドラ関数をラップし、実行時に発生した例外をキャッチして共通のエラーレスポンスを返却します。
 * @param handler 実行する非同期APIハンドラ関数
 * @returns 正常時はハンドラのレスポンス、エラー時は500エラーレスポンス
 */
export async function handleApi(handler: HandlerFn): Promise<Response> {
    try {
        return await handler();
    } catch (e) {
        console.error("APIエラー", e);

        return NextResponse.json(
            { message: ERROR_MESSAGES.SERVER_ERROR },
            { status: 500 }
        );
    }
}