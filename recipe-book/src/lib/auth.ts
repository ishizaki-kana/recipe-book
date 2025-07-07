import { JWTPayload, jwtVerify, SignJWT } from 'jose';
import jwt from 'jsonwebtoken';


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
 * トークン検証 (Node.js)
 * 
 * トークンを検証し、有効なときトークン内に含まれたデータを取得し返却します。
 * 
 * @param token クライアントから送信されたトークン
 * @returns トークン内のデータ
 */
export function verifyToken(token: string) {
    try {
        return jwt.verify(token, SECRET);
    } catch {
        return null;
    }
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

//TODO ログアウト処理（Cookie削除）

//TODO トークンの更新（リフレッシュ）

//TODO bcryptによるパスワードハッシュ化対応
