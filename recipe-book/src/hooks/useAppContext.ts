'use client'
import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('コンテキストが見つかりません。');
    return context;
}