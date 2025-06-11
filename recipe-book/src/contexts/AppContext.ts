'use client'

import { AppContextType } from "@/types/context";
import { createContext } from "react";

export const AppContext = createContext<AppContextType | undefined>(undefined);