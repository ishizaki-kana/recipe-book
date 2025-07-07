import { NextResponse } from "next/server";
import { ERROR_MESSAGES, formatMessage } from "./constants/messages";

type HandlerFn = () => Promise<Response>;

export const API_HEADERS = {
    'Cache-Control': 'public, max-age=0, s-maxage=60, state-while-revalite=30'
}

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
    } catch (e: any) {
        console.error("APIエラー", e);

        return NextResponse.json(
            { message: e?.message || ERROR_MESSAGES.SERVER_ERROR },
            { status: e?.status || 400 }
        );
    }
}

export async function getRequestParams<T extends Record<string, any>>(
    req: Request,
    options?: {
        requiredParams?: string[]
        requiredAnyParams?: string[]
    }
): Promise<{
    searchParams: URLSearchParams
    json: T | null
}> {

    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const isGet = req.method === 'GET';

    let json: T | null = null;
    if (!isGet) {
        try {
            json = await req.json();
        } catch (e) {
            // TODO
        }
    }

    // 必須パラメータのチェック
    if (options?.requiredParams) {
        options.requiredParams.forEach(p => {

            if (isGet) {
                if (!searchParams.get(p)) {
                    throw new Error(formatMessage(ERROR_MESSAGES.REQUIRED_PARAM, p));
                }
            } else {
                if (json && !(p in json)) {
                    throw new Error(formatMessage(ERROR_MESSAGES.REQUIRED_PARAM, p));
                }
            }
        })
    }

    // いずれか必須パラメータのチェック
    if (options?.requiredAnyParams) {
        const found = options.requiredAnyParams.some(p => {
            if (isGet) {
                return searchParams.get(p);
            } else {
                return json && json[p] !== undefined;
            }
        });

        if (!found) {
            const params = options.requiredAnyParams.join(', ')
            throw new Error(formatMessage(ERROR_MESSAGES.REQUIRED_ANY_PARAMS, params));
        }
    }

    return { searchParams, json };
}