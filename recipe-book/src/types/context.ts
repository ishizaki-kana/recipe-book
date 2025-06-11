import { User } from "./entity";

/**
 * アプリコンテキスト
 */
export type AppContextType = {
    loginUser: User | undefined;
    setLoginUser: (user: User) => void;
}