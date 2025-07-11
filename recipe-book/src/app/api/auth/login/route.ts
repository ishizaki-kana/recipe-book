import { handleApi } from '@/lib/api';
import { signToken } from '@/lib/auth';
import { ERROR_MESSAGES } from '@/lib/constants/messages';
import { COOKIE_KEYS, setCookie } from '@/lib/cookie';
import { userRepository } from '@/lib/repositories/userRepository';
import { NextResponse } from 'next/server';

/**
 * ログイン (/api/auth/login)
 * 
 * ユーザー認証を行い、トークンをCookieに保存します。
 * 
 * { userId: ユーザーID, password: パスワード }
 * 
 * @param req リクエスト 
 * @returns レスポンス
 */
export async function POST(req: Request) {
    return handleApi(async () => {
        const { userId, password } = await req.json();
        const user = await userRepository.findById(userId);

        // パスワードが一致しないとき、401エラー
        if (!user || user.password !== password) {
            return NextResponse.json(
                { message: ERROR_MESSAGES.AUTH_FAILED },
                { status: 401 }
            );
        }

        // 成功したとき、JWTトークン発行しCookieに保存
        const token = await signToken({ userId: user.id });
        console.log('/login', token)
        const res = NextResponse.json({}, { status: 200 });
        return setCookie(res, COOKIE_KEYS.AUTH_TOKEN, token);
    });
}
