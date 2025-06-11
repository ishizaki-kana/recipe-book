'use client'

import { ReactNode, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function AppContextProvider({
    children
}: {
    children: ReactNode
}) {

    const [loginUser, setLoginUser] = useState<User | undefined>(undefined);

    return (
        <AppContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </AppContext.Provider>
    )
}