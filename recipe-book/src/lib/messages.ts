
export const ERROR_MESSAGES = {
    REQUIRED_FIELD: '入力してください',
    AUTH_FAILED: 'ログインに失敗しました。ユーザーIDまたはパスワードが違います。',
    NOT_FOUND: '{0}が見つかりませんでした。',
    INVALID_VALUE: '{0}が無効です。',
    SERVER_ERROR: 'サーバーでエラーが発生しました。',
    UNKNOWN_ERROR: '予期せぬエラーが発生しました。',
} as const;

/**
 * メッセージテンプレート置換
 * 
 * @param template プレースホルダ付きのメッセージ
 * @param args 挿入したい文字列リスト
 * @returns プレースホルダを置換した文字列
 */
export function formatMessage(template: string, ...args: string[]): string {
    return args.reduce((result, arg, index) => {
        return result.replace(`{${index}}`, arg)
    }, template);
}

