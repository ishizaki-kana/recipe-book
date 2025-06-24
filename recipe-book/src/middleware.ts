import { NextRequest, NextResponse } from 'next/server';
import { verifyTokenEdge } from './lib/auth';
import { COOKIE_KEYS } from './lib/cookie';

export async function middleware(req: NextRequest) {
    const token = req.cookies.get(COOKIE_KEYS.AUTH_TOKEN)?.value;
    const payload = token ? await verifyTokenEdge(token) : null;
    const isLoggedIn = !!payload && typeof payload == 'object' && 'userId' in payload;
    const { pathname } = req.nextUrl;

    // ログイン済み状態でログインページへ移動したとき
    if (pathname === '/login' && isLoggedIn) {
        return NextResponse.redirect(new URL('/recipe', req.url));
    }

    // 未ログイン状態でコンテンツページへ移動したとき
    if (pathname !== '/login' && pathname !== '/' && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

/**
 * 除外ファイル
 * 
 * /api 以下
 * Next.js の静的アセット(_next)
 * favicon.ico
 * .well-known
 */
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|login|\\.well-known|^$).*)',
    ]
};

// Edge Runtime(軽量だが、機能が一部制限されたJSの実行環境)で実行される