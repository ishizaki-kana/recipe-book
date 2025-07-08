import { User } from "@prisma/client";
import { verifyToken } from "./auth";
import { ERROR_MESSAGES, formatMessage } from "./constants/messages";
import { COOKIE_KEYS, getCookie } from "./cookie";
import { apiGet } from "./fetch";

/**
 * Cookieからログインユーザー情報取得
 * 
 * Cookieに保存されたトークンからログインユーザー情報を取得し返却します。
 * 
 * @returns ログインユーザー情報 | null
 */
export async function getUserFromAuthToken() {
    const token = await getCookie(COOKIE_KEYS.AUTH_TOKEN);

    // トークンが存在しないとき、エラー
    if (!token) {
        console.error(formatMessage(ERROR_MESSAGES.NOT_FOUND, 'トークン'))
        return null;
    }

    // トークンが無効またはトークン内のデータに userId が含まれていないとき、エラー
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded !== 'object' || !('userId' in decoded)) {
        console.error(formatMessage(ERROR_MESSAGES.INVALID_VALUE, 'トークン'));
        return null;
    }

    const user: User = await apiGet(`/user/find?id=${decoded.userId}`);

    if (!user) {
        console.error(formatMessage(ERROR_MESSAGES.NOT_FOUND, 'ユーザー'));
        return null;
    }

    return user;
}