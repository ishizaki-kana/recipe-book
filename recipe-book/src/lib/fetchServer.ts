import { ApiError } from "@/types/error";
import { cookies } from "next/headers";
import { ERROR_MESSAGES } from "./constants/messages";
import { getBaseUrl } from "./fetch";

const url = '/api';

export async function apiGetServer<T>(
    endpoint: string
): Promise<T> {
    const cookieStore = cookies();
    const cookie = (await cookieStore).toString();
    console.log(cookie)
    const res = await fetch(`${getBaseUrl()}${url}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': getBaseUrl(),
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true',
            'Cookie': cookie
        },
        cache: 'no-store'
    });

    return await handleResponse<T>(res);
}

//
// private
//

/**
 * エラーハンドリング
 * 
 * @template T レスポンスのデータ型
 * @param res レスポンス
 * @returns 解析後のレスポンスデータ
 * @throws APIからのエラーレスポンスまたは解析エラー
 */
async function handleResponse<T>(res: Response): Promise<T> {

    if (!res.ok) {
        let errorMsg: string = ERROR_MESSAGES.SERVER_ERROR;

        try {
            const error: ApiError = await res.json();
            errorMsg = res.url + ' ' + error.message || errorMsg;
        } catch {
            errorMsg = res.statusText || errorMsg;
        }

        throw new Error(errorMsg);
    }

    return res.json();
}