"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface LanguageData {
    en: string;
    ru: string;
}

const AppContext = createContext<{
    languageData: LanguageData | undefined;
    setLanguageData: React.Dispatch<React.SetStateAction<LanguageData | undefined>>;
} | null>(null);

export function AppTranslationWrapper({ children }: { children: ReactNode }) {
    const [languageData, setLanguageData] = useState<LanguageData>();

    return (
        <AppContext.Provider value={{ languageData, setLanguageData }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppTrnslationContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppWrapper");
    }
    return context;
}
