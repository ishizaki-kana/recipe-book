/**
 * アプリコンテキスト
 */
type AppContext = {
    loginUser: User | undefined;
    setLoginUser: (user: User) => void;
}