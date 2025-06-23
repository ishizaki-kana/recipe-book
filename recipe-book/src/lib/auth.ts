import { JWTPayload, jwtVerify, SignJWT } from 'jose';
import jwt from 'jsonwebtoken';
import { COOKIE_KEYS, getCookie } from './cookie';
import { ERROR_MESSAGES, formatMessage } from './messages';
import { prisma } from './prisma';

/**
 * 秘密鍵 (Node.js)
 * 
 * 環境設定ファイルから取得
 */
const SECRET = process.env.JWT_SECRET || 'your-secret';

/**
 * 秘密鍵 (Edge Runtime)
 */
const SECRET_EDGE = new TextEncoder().encode(SECRET);

/**
 * トークン有効期限 1日
 */
const tokenExpiration = '1d';

/**
 * トークン発行 (Node.js)
 * 
 * @param payload トークンに含めるデータ
 * @returns トークン文字列
 */
export function signToken(payload: object): string {
    return jwt.sign(payload, SECRET, { expiresIn: tokenExpiration });
}

/**
 * トークン発行 (Edge)
 * 
 * @param payload トークンに含めるデータ
 * @returns トークン文字列
 */
export async function signTokenEdge(payload: JWTPayload): Promise<string> {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime(tokenExpiration)
        .sign(SECRET_EDGE);
}

/**
 * トークン検証 (Edge)
 * 
 * トークンを検証し、有効なときトークン内に含まれたデータを取得し返却します。
 * 
 * @param token クライアントから送信されたトークン
 * @returns トークン内のデータ
 */
export async function verifyTokenEdge(token: string) {
    try {
        const { payload } = await jwtVerify(token, SECRET_EDGE);
        return payload;
    } catch {
        return null;
    }
}

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

    // DBからデータ取得
    const user = await prisma.user.findUnique({
        where: { userId: decoded.userId as string },
    });

    if (!user) {
        console.error(formatMessage(ERROR_MESSAGES.NOT_FOUND, 'ユーザー'));
        return null;
    }

    return user;
}

//
// private
//

/**
 * トークン検証 (Node.js)
 * 
 * トークンを検証し、有効なときトークン内に含まれたデータを取得し返却します。
 * 
 * @param token クライアントから送信されたトークン
 * @returns トークン内のデータ
 */
function verifyToken(token: string) {
    try {
        return jwt.verify(token, SECRET);
    } catch {
        return null;
    }
}

//TODO ログアウト処理（Cookie削除）

//TODO トークンの更新（リフレッシュ）

//TODO bcryptによるパスワードハッシュ化対応
